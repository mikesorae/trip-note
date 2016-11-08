import React, { Component } from 'react';

export default class PlaceInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="row" onSubmit={this.onSubmit.bind(this)}>
        <div className="col s10">
          <input type="text" ref="newPlace" />
        </div>
        <div className="col s2">
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          </button>
        </div>
      </form>
    )
  }

  onSubmit(event) {
    event.preventDefault();
    let input = this.refs.newPlace;
    let newPlace  = input.value;
    this.props.addEvent({ newPlace });
    input.value = '';
  }
}
