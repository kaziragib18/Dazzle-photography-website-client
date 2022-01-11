import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import LeftArrow from "../../images/left-arrow.svg"
import RightArrow from "../../images/right-arrow.svg"
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`AllData/ReviewData.json`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div className='reviews'>
      <Container>

        <div className='reviews-title'>
          <h4 className='google-font text-warning'>Our Client's Review</h4>
          <h2 style={{ fontSize: "2.6rem", color: "#e8e4e4bf" }}>Here whats our clients thinks about our services</h2>
        </div>
        {data.length === 0 ?
          <CircularProgress sx={{ margin: 'auto', display: 'block' }} />
          : <Slider {...settings} className="card__container--inner">


            {
              data.map((x) => <Review card={x} />)
            }


          </Slider>
        }

      </Container>

      <div></div>
    </div>
  );
};

export default Reviews;