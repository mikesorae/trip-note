import React, { Component } from 'react';
import PlaceListItem from './place_list_item'

export default class PlaceList extends Component {
  render() {
    let items = this.props.places.map((place) => {
      return (
        <PlaceListItem place={place} />
      )
    });

    return (
      <ul className="collection">
        { items }
      </ul>
    );
  }
}
