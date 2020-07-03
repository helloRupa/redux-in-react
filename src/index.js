import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, combineReducers } from 'redux';
import catReducer from './reducers/catReducer';
import peacockReducer from './reducers/peacockReducer';

const rootReducer = combineReducers({
  cat: catReducer,
  peacock: peacockReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

