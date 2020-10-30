import React from "react";

class Asociate extends React.Component {
  render() {
    return (
      <div className="asociate">
        <img className="asociate__logo" src={this.props.logo} alt="" />
        <p className="asociate__name">{this.props.name}</p>
      </div>
    );
  }
}
export default Asociate;
