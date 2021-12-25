import React from 'react';
import { Container, Grid } from '@mui/material'
import t4 from '../../../images/Team/t4.jpg';
import t2 from '../../../images/Team/t2.jpg';
import Calender from '../../Shared/Calender/Calender';

const BookingHeader = () => {
  return (
    <>
      <div className='team-section pb-5'>
        <Container>
          <Grid container spacing={15}>
            <Grid item xs={12} md={6}>
              <div className="team-section-img pt-5 pb-5">
                <div className='team-section-img1'>
                  <img style={{ borderRadius: "80px" }} src={t4} alt="" />
                </div>
                <div className='team-section-img2'>
                  <img style={{ borderRadius: "50px" }} src={t2} alt="" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='team-section-content'>
                <div className=''>
                  <Calender/>
                 
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

{/* <Container>
<Grid container spacing={2}>
  <Grid item xs={12} md={6}>

  </Grid>
  <Grid item xs={12} md={6}>

  </Grid>

</Grid>
</Container> */}