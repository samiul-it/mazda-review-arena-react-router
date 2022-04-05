import React from 'react';
import './Review.css';
import { Rating } from "react-simple-star-rating";

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
              <Rating
                initialValue={rating}
                readonly={true}
                size={22}
                fillColor="rgb(45 134 188)"
                transition={true}
                allowHover={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;