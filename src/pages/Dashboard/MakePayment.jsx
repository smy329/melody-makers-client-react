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

const MakePayment = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();

  const { _id, price, className } = location?.state || {};
  const finalPrice = parseFloat(price.toFixed(2));

  return (
    <div className="w-3/5 mx-auto my-auto">
      <h1>Name: {user?.displayName}</h1>
      <p>Class ID: {_id}</p>
      <p>Class Name: {className}</p>
      <p className="mb-8">Price: ${finalPrice}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={finalPrice} _id={_id} className={className} />
      </Elements>
      {/* <button className="btn-theme" onClick={handleMakePayment}>
        Make Payment
      </button> */}
    </div>
  );
};

export default MakePayment;
