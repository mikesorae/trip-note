import React from 'react';
import { render } from 'react-dom';

import Hello from './components/hello';
import World from './components/world';

render(
    <div>
        <Hello />
        <World />
    </div>,
    document.getElementById('app')
);
