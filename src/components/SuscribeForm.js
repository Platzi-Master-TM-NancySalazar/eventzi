import React from "react";

class SuscribeForm extends React.Component {
  state = {};

  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {};
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Se a registrado el correo ${this.state.email}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="email"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleClick} className="form__btn">
          Suscribe
        </button>
      </form>
    );
  }
}
export default SuscribeForm;
