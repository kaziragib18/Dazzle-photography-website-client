import React from 'react';
import { Container, Grid } from '@mui/material';
import './Team.css'
import t1 from '../../images/Team/t1.jpg';
import t3 from '../../images/Team/t3.jpg';

const Team = () => {
  return (
    <>
      <div className='team-section pb-5'>
        <Container>
          <Grid container spacing={15}>
            <Grid item xs={12} md={6}>
              <div className="team-section-img">
                <div className='team-section-img1'>
                  <img style={{ borderRadius: "80px" }} src={t1} alt="" />
                </div>
                <div className='team-section-img2'>
                  <img style={{ borderRadius: "50px" }} src={t3} alt="" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='team-section-content'>
                <div className='team-content-text-title'>
                  <h4 className='google-font text-warning pt-5'>Our Photographer</h4>
                  <h1>The trusted, professional wedding photography team loved by couples</h1>
                </div>
                <div className='team-section-intro'>
                  <p>Your photographer will get in touch closer to your wedding to go over all of your on-day details. You can contact our team at any time to update your details and provide us with more information on your wedding. After your wedding your images are all provided to our team of professional photo editors who will edit them in style - beautiful, bright and colourful. You will receive all of your images as high resolution jpegs ready to print and share.</p>
                </div>

              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

    </>
  );
};

export default Team;