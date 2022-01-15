import React from 'react';

const BookingAvailable = ({ date }) => {

  return (
    <div style={{ backgroundColor: "black" }}>
      <h2 className='google-font text-warning mb-0 pb-5 text-center'>Available Booking at {date.toDateString()}</h2>
    </div>
  );
};

export default BookingAvailable;