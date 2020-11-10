import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";

const Speaker = (props) => {
  return (
    <div className={"speaker__card"}>
      <div className="speaker__overlay">
        <div className="speaker__info">
          <div className="speaker__name">
            <p>{props.name}</p>
          </div>
          <div className="speaker__title">
            <p>{props.title}</p>
          </div>
          <div className="speaker__description">
            <small>{props.description}</small>
          </div>
          <div className="speaker__twitter">
            <a href={`https://twitter.com/${props.twitter}`} target="blank">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="speaker__image-container">
        <img className="speaker__image" src={props.image} alt="Speaker image" />
      </div>
    </div>
  );
};

export default Speaker;
