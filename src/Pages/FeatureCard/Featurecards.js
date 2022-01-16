import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import './FeatureCards.css'

const FeatureCards = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(`AllData/FeatureData.json`)
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  return (
    <div className='Features-section'>
      <Container>
        <div className='Feature-title' data-aos="fade-right" data-aos-duration="1700">
          <h3 className='google-font text-warning'>What We Offer</h3>
          <h2 style={{ fontSize: "2.6rem", color: "#e8e4e4bf", paddingBottom: 15 }}>Explore & choose what's best for you! </h2>
        </div>
        <Grid container spacing={3}>
          {
            cards.map((x) => <SingleCard card={x} />)
          }
        </Grid>
      </Container>
    </div>
  );
};

export default FeatureCards;