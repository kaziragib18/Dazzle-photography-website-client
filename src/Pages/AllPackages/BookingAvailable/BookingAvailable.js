import React from 'react';

const BookingAvailable = ({date}) => {
  return (
    <div style={{backgroundColor:"black"}}>
      <h2 className='google-font text-warning m-0 text-center p-4'>Available Booking at {date.toDateString()}</h2>
    </div>
  );
};

export default BookingAvailable;