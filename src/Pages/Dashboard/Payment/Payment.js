import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { Container, Grid, Paper } from '@mui/material';
import login from '../../../images/payment.svg';
import './Payment.css';


const stripePromise = loadStripe('pk_test_51Jw7IMLUedPupBbn2LmP9WJ2IRAA93NLWDdIDDRObEF7F03lDCH72Ba97FAeaeLbIZFrBTRnrV29xlvCA02kbqr800gomXF1Mf');

const Payment = () => {
  const { bookingId } = useParams()
  const [booking, setBooking] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${bookingId}`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [bookingId])

  return (
    <Container data-aos="fade-up" data-aos-duration="1900">
      <Paper elevation={24} sx={{ p: 4, mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 3 }} xs={12} md={6}>
            <h3 className="google-font text-warning"> Complete Your Payment Process
            </h3>
            <hr />
            <div className='text-Style'>
              <h5>Booking id: {bookingId} </h5>
              <h5>Name: {booking.customerName} </h5>
              <h5>Email: {booking.email} </h5>
              <h5>Package: {booking.serviceName}</h5>
              <h5>Booking date: {booking.date}</h5>
              <h5>Pay: $ {booking.price}</h5>
              <hr />
              {booking?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                  booking={booking} />
              </Elements>
              }
            </div>

          </Grid>

          <Grid item xs={12} md={6}>
            <img src={login} style={{ width: '80%', marginTop: 30 }} alt="" />
          </Grid>

        </Grid>
      </Paper>
    </Container >

  );
};

export default Payment;

