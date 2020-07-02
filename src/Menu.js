import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { selectCat } from './actions/catActions';

const dispatchSelectCat = cat => {
  window.store.dispatch(selectCat(cat));
};

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      prevCats: window.store.getState().cats
    }
  }

  componentDidMount() {
    window.store.subscribe(() => {
      if (this.state.prevCats.length !== window.store.getState().cats.length) {
        this.setState({ prevCats: window.store.getState().cats.length });
      }
    });
  }
  
  render() {
    console.log('render Menu');
    const cats = window.store.getState().cats;

    return (
      <nav>
        <h2>Cat Menu</h2>
        { cats.map(cat => < MenuItem catName={cat} key={cat} selectCat={dispatchSelectCat} />) }
      </nav>
    );
  }
  
}

export default Menu;
