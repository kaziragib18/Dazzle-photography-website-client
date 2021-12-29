import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Package.css';
import BookingModal from '../AllPackages/BookingModal/BookingModal';

const Package = ({ packageData, date, setBookingSuccess }) => {
  const { name, desc1, desc2, desc3, desc4, desc5, price, img } = packageData;

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
            <p>{desc1}</p>
            <p>{desc2}</p>
            <p>{desc3}</p>
            <p>{desc4}</p>
            <p>{desc5}</p>
            <div className='price-and-btn'>
              <h3>$ {price}</h3>
              <Link onClick={handleBookingOpen}>Book now</Link>
            </div>
          </div>

        </div>
      </Grid>
      <BookingModal
        date={date}
        packageData={packageData}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      />
    </>
  );
};

export default Package;