import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';
// import { Elements } from '@stripe/react-stripe-js';


// const stripePromise = loadStripe('pk_test_51Jw7IMLUedPupBbn2LmP9WJ2IRAA93NLWDdIDDRObEF7F03lDCH72Ba97FAeaeLbIZFrBTRnrV29xlvCA02kbqr800gomXF1Mf');

const Payment = () => {
  const { bookingId } = useParams()
  const [booking, setBooking] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${bookingId}`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [bookingId])

  return (
    <div style={{ fontFamily: "poppins", fontSize: "12px" }}>
      <h2>Booking id: {bookingId} </h2>
      <h3>Name: {booking.customerName} </h3>
      <h3>Email: {booking.email} </h3>
      <h3>Package: {booking.serviceName}</h3>
      <h3>Pay: $ {booking.price}</h3>

      {/* {appointment?.price && <Elements stripe={stripePromise}>
                        <CheckoutForm
                              appointment={appointment}
                        />
                  </Elements>} */}
    </div>
  );
};

export default Payment;