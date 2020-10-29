import React from "react";

const SuscribeForm = () => {
  return (
    <section className="register">
      <h2 className="title">Register with email</h2>
      <input className="form__input" type="text" placeholder="email" />
      <input className="form__btn" type="submit" value="Suscribe" />
    </section>
  );
};

export default SuscribeForm;
