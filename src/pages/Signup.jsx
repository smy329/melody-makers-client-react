import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmail(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.profileUrl)
          .then(() => {
            //const DbUserdata = {name: data.name, email: data.email, image: data.profileUrl}
            console.log('Updating profile with name & profile image url', loggedUser);
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify({
                name: data.name,
                email: data.email,
                image: data.profileUrl,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log('after storing database', data);
                if (data.insertedId) {
                  reset();
                  toast('Sign up Successful');
                }
              })
              .catch((error) => {
                toast(error.message());
                console.log(error.message());
              });

            navigate('/');
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => console.log(error.message));
    reset();
  };
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="w-full mx-auto">
            <div>
              <h1 className="text-3xl font-semibold">Sign Up</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="name"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none 0 focus:borer-rose-600"
                      placeholder="Full Name"
                      {...register('name', { required: true })}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Name
                    </label>
                    {errors.name && <span className="text-rose-700">Name is required</span>}
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent 0 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email"
                      {...register('email', { required: true })}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email
                    </label>
                    {errors.email && <span className="text-rose-700">Email is required</span>}
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent 0 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      {...register('password', {
                        required: true,
                        minLength: 6,
                        maxLength: 28,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    {errors.password?.type === 'required' && (
                      <span className="text-rose-700">Password is required</span>
                    )}
                    {errors.password?.type === 'minLength' && (
                      <span className="text-rose-600">Password must be atleast 6 characters</span>
                    )}
                    {errors.password?.type === 'maxLength' && (
                      <span className="text-rose-600">Password cannot be more than 28 characters</span>
                    )}
                    {errors.password?.type === 'pattern' && (
                      <span className="text-rose-600">
                        Password must have atleast one uppercase, one lowercase, one number and one special characters
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="peer placeholder-transparent 0 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="confirmPassword"
                      className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="profileUrl"
                      name="profileUrl"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Profile Url"
                      {...register('profileUrl', { required: false })}
                    />
                    <label
                      htmlFor="profileUrl"
                      className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Photo URL
                    </label>
                  </div>

                  <div className="relative">
                    <button className="btn-theme">Submit</button>
                    <p className="text-sm font-light text-gray-500">
                      Aleady have an accountt? &nbsp;
                      <a href="/login" className="font-medium text-gray-600 hover:underline">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
