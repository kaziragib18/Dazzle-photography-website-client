import React from 'react';
import { Container, Grid } from '@mui/material'
import t4 from '../../../images/Team/t-4.jpg';
import t2 from '../../../images/Team/t2.jpg';
import Calender from '../../Shared/Calender/Calender';

const BookingHeader = ({ date, setDate }) => {

  return (
    <>
      <div className='team-section pb-5'>
        <Container>
          <Grid container spacing={10}>
            <Grid item xs={12} md={7}>
              <div className="team-section-img pt-5 pb-5">
                <div className='team-section-img1'>
                  <img style={{ borderRadius: "80px" }} src={t4} alt="" />
                </div>
                <div className='team-section-img2'>
                  <img style={{ borderRadius: "50px" }} src={t2} alt="" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={5} >
              <div className=''>
                <h4 className='pt-5 google-font text-warning'>Availabe Booking Schedule</h4>
                <h3 style={{ fontSize: "1.8rem", color: "#e8e4e4bf" }}>Select the day you want to book our package</h3>
                <div className='pt-3'>
                  <Calender date={date} setDate={setDate} />
                </div>

              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

    </>
  );
};

export default BookingHeader;
