import React from 'react'
import { Link } from 'react-router-dom'

export default function Error (props) {
  return (
    <div className="notFound">
      <h2>Oops we have an error😵</h2>
      <h3>Error: {props.error}</h3>
      <Link to="/">
        <p className="button-primary">Go to home</p>
      </Link>
    </div>
  )
}
