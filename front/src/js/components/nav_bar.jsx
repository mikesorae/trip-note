import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">TripNote</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/trips">Trips</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
