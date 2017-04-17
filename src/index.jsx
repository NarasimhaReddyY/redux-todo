// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import addTodo from './reducers/index.jsx';

let store = createStore(addTodo);


ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>, 
	document.getElementById('react-root')
);
