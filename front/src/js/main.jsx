import React from 'react';
import { render } from 'react-dom';

import NavBar from 'components/nav_bar';
import PlaceList from 'components/place_list';

let places = ["sample1", "sample2", "sample3"];

render(
  <div>
    <NavBar />
    <PlaceList places={ places }  />
  </div>,
  document.getElementById('app')
);
