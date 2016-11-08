import React from 'react';
import { render } from 'react-dom';

import NavBar from 'components/nav_bar';
import PlaceList from 'components/place_list';
import PlaceInput from 'components/place_input';

let allItems = ["sample1", "sample2", "sample3"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: allItems
    }
    this.addEvent = this.addEvent.bind(this);
  }

  render() {
    return (
      <div>
        <NavBar />
        <PlaceInput addEvent={ this.addEvent } />
        <PlaceList places={ this.state.allItems } />
      </div>
    )
  }

  addEvent(todoItem) {
    console.log(todoItem);
    allItems.push(todoItem.newPlace);
    this.setState({ allItems });
  }
}

render(
  <App></App>,
  document.getElementById('app')
);
