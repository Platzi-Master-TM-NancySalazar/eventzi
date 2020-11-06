import React from "react";

class SuscribeForm extends React.Component {
  state = {};

  handleChange = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email != undefined && this.state.email != "") {
      alert(`Email ${this.state.email} was registered`);
      var url = `https://eventziapi.herokuapp.com/events/${this.props.eventId}/register`;
      var data = this.state;

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
    } else alert(`Enter a valid mail ${this.state.email}`);
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
