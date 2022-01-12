import React from 'react';
import ReactStars from "react-rating-stars-component";

const Review = ({ card }) => {
  const { img, email, name, desc, rating } = card
  return (
    <div className="review-card">
      <div className='reviews-description'>
        <p>{desc}</p>
      </div>
      <div className='reviews-user-intro'>
        <div className='review-user'>
          <div className='review-user-image'>
            <img src={`data:image/jpeg;base64,${img}`} alt="profileImage" />
          </div>
          <div className='review-user-name-title'>
            <h3>{name}</h3>
            <p>{email}</p>
            <ReactStars
              count={Number(rating)}
              value={Number(rating)}
              isHalf={true}
              edit={false}
              size={20}
              color="#666"
            />
          </div>
        </div>
        <div className='review-box-image'>
          <i aria-hidden="true" class="fas fa-quote-right"></i>
        </div>
      </div>
    </div>

  );
};

export default Review;