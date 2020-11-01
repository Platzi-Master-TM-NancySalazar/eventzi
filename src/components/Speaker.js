import React from "react";
import twitterIcon from "../assets/static/twitter-icon.png";

class Speaker extends React.Component {
  render() {
    return (
      <div className={"speaker__card"}>
        <div className="speaker__overlay">
          <div className="speaker__info">
            <div className="speaker__name">
              <p>{this.props.name}</p>
            </div>
            <div className="speaker__title">
              <p>{this.props.title}</p>
            </div>
            <div className="speaker__description">
              <small>{this.props.description}</small>
            </div>
            <div className="speaker__twitter">
              <a
                href={`https://twitter.com/${this.props.twitter}`}
                target="blank"
              >
                <img src={twitterIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="speaker__image-container">
          <img
            className="speaker__image"
            src={this.props.image}
            alt="Speaker image"
          />
        </div>
      </div>
    );
  }
}

export default Speaker;
