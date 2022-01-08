import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const CheckoutForm = ({ booking }) => {
  const { price } = booking;
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
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
        <Button variant="contained"
          style={{ marginTop: "15px", backgroundColor: '#e23801' }} type="submit"
          disabled={!stripe}
        >
          Pay $ {price}
        </Button>
      </form>
      {
        error && <p style={{ paddingTop: '15px', color: 'red' }}>{error}</p>
      }
    </div>
  );
};

export default CheckoutForm;