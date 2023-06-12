import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ price, _id, className }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('PaymentMethod', paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || 'anonymous',
          email: user?.email || 'anonymous',
        },
      },
    });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log('payment intent', paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      //store infoin the server
      const paymentInfo = { email: user?.email, transactionId: paymentIntent?.id, price, classId: _id, className };
      axiosSecure.post('/users/payments', paymentInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success('You payment has been successful');
        }
      });

      //storing enrolled classes and revoe from selected class
      const enrolledClassData = { email: user.email, classId: _id };
      axiosSecure.patch('/users/enrolled-classes', enrolledClassData).then((res) => {
        console.log(res.data);
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <button className="btn-theme mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
          Make Payment
        </button>
      </form>
      {cardError && <p className="text-rose-600">{cardError}</p>}
      {transactionId && (
        <p className="text-emerald-600 font-medium">Transaction completed with transaction ID: &nbsp;{transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
