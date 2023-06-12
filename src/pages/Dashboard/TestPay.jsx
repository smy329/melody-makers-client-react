import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk_public_token);

const TestPay = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();

  const { _id, price } = location?.state || {};
  const finalPrice = parseFloat(price.toFixed(2));

  const handleMakePayment = () => {
    // const enrolledClassData = { email: user.email, classId: _id };
    // axiosSecure.patch('/users/enrolled-classes', enrolledClassData).then((res) => {
    //   console.log(res.data);
    // });
  };
  return (
    <div className="w-3/5 mx-auto my-auto">
      <h1>{user?.email}</h1>
      <p>{_id}</p>
      <p>Price: ${finalPrice}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={finalPrice} _id={_id} />
      </Elements>
      {/* <button className="btn-theme" onClick={handleMakePayment}>
        Make Payment
      </button> */}
    </div>
  );
};

export default TestPay;
