import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    loginWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
      console.log(saveUser);
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('after storing database', data);
          if (data.insertedId) {
            toast.success('User account has been created successfully');
          }
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className="flex justify-between gap-5">
      <button
        className="mb-2 w-full flex items-center justify-center px-4 py-2 bg-blue-500 rounded-lg text-white"
        onClick={handleGoogleSignIn}
      >
        <FaGoogle /> &nbsp; <span>Login with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
