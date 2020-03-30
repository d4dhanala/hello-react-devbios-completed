import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import devActions from './reducers/devBios';

ReactDOM.render(
<Provider store={createStore(devActions.reducer)}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
