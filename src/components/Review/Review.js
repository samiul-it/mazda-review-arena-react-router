import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name,img,rating,review}= props.customerReview;
    return (
      <div className="review-container">
        <div className="review-card">
          <div className="user-img">
            <img src={img} alt={name} />
          </div>
          <div className="review-text-container">
            <div className="review-text">
              <i>"{review}"</i>
            </div>
            <div className="user-name">
              <h6>
                <strong>-{name}</strong>
              </h6>
              <h6>Rating: {rating}</h6>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;