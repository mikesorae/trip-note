import React from 'react';
import { render } from 'react-dom';

import NavBar from 'components/nav_bar';
import PlaceList from 'components/place_list';
import PlaceInput from 'components/place_input';

let places = ["sample1", "sample2", "sample3"];

render(
  <div>
    <NavBar />
    <PlaceInput />
    <PlaceList places={ places }  />
  </div>,
  document.getElementById('app')
);
