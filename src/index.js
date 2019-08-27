// React knows to look for the index.js
// Import React using ES6 modules, from 'react' must be lower case
import React from 'react';
// Or just import Components and ext that
// import {Component} from 'react';
// class StorePicker extends Component;

// Just importing the render method from the react-dom package
import { render } from 'react-dom';

// Import the component, don't need the .js
import StorePicker from './components/StorePicker';

// Can import css here or put in component
import './css/style.css';

// Render the StorePicker component to the main div on the index.html page
render(<StorePicker />, document.getElementById('main'));
