import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({ booking }) => {
  const { price, customerName, _id } = booking;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  const [error, setError] = useState();
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('https://radiant-stream-13822.herokuapp.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });
    if (error) {
      setError(error.message);
    }
    else {
      setError('');
      console.log(paymentMethod);
    }

    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: user.email
          },
        },
      },
    );
    if (intentError) {
      setError(intentError.message);
      setSuccess('');
    }
    else {
      setError('');
      setSuccess('Your payment processed successfully.')
      console.log(paymentIntent);
      setProcessing(false);

      //save payment to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice('_secret')[0]
      }
      const url = `https://radiant-stream-13822.herokuapp.com/bookings/${_id}`;
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => console.log(data));
    }

  }

  return (
    <div style={{ width: "75%" }}>
      <form
        onSubmit={handleSubmit}
      >
        <div style={{ padding: "20px 0px 20px 0px" }} >
          <CardElement
            options={{
              style: {
                base: {
                  padding: "20px",
                  fontSize: '15px',
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
        </div>
        {processing ? <CircularProgress />
          :
          <Button variant="contained"
            style={{ marginTop: "15px", backgroundColor: '#e23801' }} type="submit"
            disabled={!stripe || success}
          >
            Pay $ {price}
          </Button>
        }
      </form>
      {
        error && <p style={{ paddingTop: '15px', color: 'red' }}>{error}</p>
      }
      {
        success && <p style={{ paddingTop: '15px', color: 'green' }}>{success}</p>
      }
    </div>
  );
};

export default CheckoutForm;