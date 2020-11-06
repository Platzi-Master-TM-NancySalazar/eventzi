import React from "react";

class Talk extends React.Component {
  render() {
    return (
      <div className="talk">
        <div className="talk__day">
          <p>{this.props.day}</p>
        </div>
        <div className="talk__time">
          <p>{this.props.time}</p>
        </div>
        <div className="talk__name">
          <p className="talk__name--strong">{this.props.title}</p>
          <p>{this.props.speaker}</p>
        </div>
        <div className="talk__description">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
export default Talk;
