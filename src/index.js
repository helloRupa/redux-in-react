import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

const initialCatState = {
  cats: ['Meowser', 'Charlie', 'Fluffanilla'],
  selectedCat: 'Meowser'
};

function catReducer(state=initialCatState, action) {
  switch(action.type) {
    case 'SELECT_CAT':
      if (!state.cats.includes(action.cat)) {
        return state;
      }

      return {
        ...state,
        selectedCat: action.cat
      }
    case 'ADD_CAT':
      return {
        ...state,
        cats: [...state.cats, action.cat]
      }
    default:
      return state;
  }
};

const store = createStore(catReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
