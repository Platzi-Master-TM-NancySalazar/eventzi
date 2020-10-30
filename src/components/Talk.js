import React from "react";

class Talk extends React.Component {
  render() {
    return (
      <div className="talk">
        <div className="talk__day">
          <p id="talkDay">{this.props.day}</p>
        </div>
        <div className="talk__time">
          <p id="talkTime">{this.props.time}</p>
        </div>
        <div className="talk__name">
          <p id="talkName">{`${this.props.name}- ${this.props.speaker}`}</p>
        </div>
        <div className="talk__description">
          <p id="talkDescription">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
export default Talk;
