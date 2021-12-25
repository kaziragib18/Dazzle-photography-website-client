import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = ({packageData}) => {
  const {name, description, img} = packageData;
  return (
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
            <Link>Book now</Link>
          </div>
        </div>


      </div>
    </Grid>
  );
};

export default Package;