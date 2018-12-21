import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';

const store = createStore(
	reducers, 
	composeWithDevTools(
		applyMiddleware(reduxThunk)
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);


