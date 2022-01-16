import React from 'react';
import { Container, Grid } from '@mui/material';
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='subscribe'>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <div className='subscribe-box' data-aos="fade-right" data-aos-duration="1700">
              <div className="subscribe-content">
                <h3 className="google-font text-warning">Our Newsletter</h3>
                <h1 className="text-size fw-bold">SUBSCRIBE & GET 10% OFF</h1>
                <p style={{ color: 'lightgray' }}>Get updated on every new offers on your packages. We would be happy to help you coordinate the perfect photographer with the perfect package for your big day. We are available to talk just email anytime! </p>
              </div>
              <div className='subscribe-form'>
                <form>
                  <input type="email" placeholder='Your Email' />
                  <button className='subscribe-btn'>Subscribe</button>
                </form>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewsLetter;