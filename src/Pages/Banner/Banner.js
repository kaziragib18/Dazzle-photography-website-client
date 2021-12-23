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
            <div className='home-banner-text'>
              <div className='banner-main-text'>
                <h1 className="text-light">Capturing the emotions of your special day</h1>
                <p><i>Dazzle was founded by a team of industry leaders who knew it was time to change the wedding photography game.</i></p>
              </div>

              <div className='home-banner-btn'>
                <Link to='/gallery'>
                  <button>Gallery</button>
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