import React from "react";
import image from "../assets/static/Elon-Musk-2010.jpg";

const Speaker = () => {
  return (
    <div className="speaker__card">
      <div className="speaker__overlay">
        <div className="speaker__info">
          <div className="speaker__name">
            <p>Elon Musk</p>
          </div>
          <div className="speaker__title">
            <p>CEO of SpaceX</p>
          </div>
          <div className="speaker__description">
            <small>
              Elon Reeve Musk is the founder, CEO, CTO and chief designer of
              SpaceX
            </small>
          </div>
          <div className="speaker__twitter">
            <a href=""></a>
          </div>
        </div>
      </div>
      <div className="speaker__image-container">
        <img className="speaker__image" src={image} alt="Speaker image" />
      </div>
    </div>
  );
};

export default Speaker;
