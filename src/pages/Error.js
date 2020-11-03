import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="notFound">
      <h2>Oops we have an error😵</h2>
      <Link to="/">
        <h3>Go to home</h3>
      </Link>
    </div>
  );
}
