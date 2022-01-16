import React from 'react';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <div className='home-Top-Banner'>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}></Grid>

          <Grid item xs={12} md={6}>
            <div className='home-banner-text' data-aos="fade-down" data-aos-duration="1700">
              <div className='banner-main-text'>
                <h1 className="text-light">Capturing the emotions of your special day</h1>
                <p><i>Dazzle takes the work out of finding a photographer with a team of hand-picked professionals ready to be matched to your wedding based on your wants and needs.</i></p>
              </div>

              <div className='home-banner-btn'>
                <Link to='/addPackage'>
                  <button id="bannerBtn">All Packages</button>
                </Link>
              </div>
            </div>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
};

export default Banner;