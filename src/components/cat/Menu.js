import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { selectCat } from '../../actions/catActions';

const dispatchSelectCat = cat => {
  window.store.dispatch(selectCat(cat));
};

const getCatsLength = () => window.store.getState().cat.cats.length;

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      prevCats: getCatsLength()
    }
  }

  componentDidMount() {
    window.store.subscribe(() => {
      const storeCatLength = getCatsLength();

      if (this.state.prevCats !== storeCatLength) {
        this.setState({ prevCats: storeCatLength });
      }
    });
  }
  
  render() {
    console.log('render Menu');
    const cats = window.store.getState().cat.cats;

    return (
      <nav>
        <h2>Cat Menu</h2>
        { cats.map(cat => < MenuItem catName={cat} key={cat} selectCat={dispatchSelectCat} />) }
      </nav>
    );
  }
  
}

export default Menu;
