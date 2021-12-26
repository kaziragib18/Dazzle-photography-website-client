import React from 'react';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './PackageBanner.css';

const PackageBanner = () => {
  return (
    <div className='package-Top-Banner'>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}></Grid>

          <Grid item xs={12} md={6}>
            <div className='package-banner-text'>
              <div className='main-text'>
                <h1 className="text-light">Celebrate your special day & make it memorable with us</h1>
                {/* <p><i>Dazzle takes the work out of finding a photographer with a team of hand-picked professionals ready to be matched to your wedding based on your wants and needs.</i></p> */}
              </div>

              <div className='home-banner-btn'>
                <Link to='/home'>
                  {/* <button></button> */}
                </Link>
              </div>
            </div>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
};

export default PackageBanner;