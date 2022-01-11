import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ card }) => {
  const { img, name, dis } = card
  return (
    <Grid item xs={12} md={4} data-aos="fade-up" data-aos-duration="1700">
      <div className='Feature-card'>
        <img src={img} alt="" />
        <div className='Feature-card-text'>
          <h2>{name}</h2>
          <p>{dis}</p>
          <Link to='/allPackages'>
            <button>Explore More</button>
          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default SingleCard;