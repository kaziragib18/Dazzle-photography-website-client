import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Package.css';
import BookingModal from '../AllPackages/BookingModal/BookingModal';

const Package = ({ packageData }) => {
  const { name, img } = packageData;

  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);

  return (
    <>
      <Grid item xs={6} md={3}>
        <div className="Home-service-box">
          <div className="home-service-box-image image-box">
            <img className='gallery' src={img} alt="" />
          </div>
          <div className='home-service-box-text'>
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque sint voluptates, sequi esse id laborum necessitatibus nobis praesentium cum obcaecati.</p>
            <div className='price-and-btn'>
              <h3>$ 2000</h3>
              <Link onClick={handleBookingOpen}>Book now</Link>
            </div>
          </div>

        </div>
      </Grid>
      <BookingModal
        packageData={packageData}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose} />
    </>
  );
};

export default Package;