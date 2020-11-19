import React from 'react'

class Asociate extends React.Component {
  render () {
    return (
      <div className="asociate">
        <a href={`http://${this.props.url}`}>
          <img className="asociate__logo" src={this.props.logo} alt="" />
        </a>
        <p className="asociate__name">{this.props.name}</p>
      </div>
    )
  }
}
export default Asociate
