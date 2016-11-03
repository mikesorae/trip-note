import React, { Component } from 'react';

export default class PlaceListItem extends Component {
  render() {
    return (
      <li className="collection-item">
          {this.props.place}
      </li>
    );
  }
}
