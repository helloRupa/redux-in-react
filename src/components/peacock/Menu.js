import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { selectPeacock } from '../../actions/peacockActions';

const dispatchSelectPeacock = peacock => {
  window.store.dispatch(selectPeacock(peacock));
};

const getPeacocksLength = () => window.store.getState().peacock.peacocks.length;

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      prevPeacocks: getPeacocksLength()
    }
  }

  componentDidMount() {
    window.store.subscribe(() => {
      const storePeacocksLength = getPeacocksLength();

      if (this.state.prevPeacocks !== storePeacocksLength) {
        this.setState({ prevPeacocks: storePeacocksLength });
      }
    });
  }
  
  render() {
    console.log('render Menu');
    const peacocks = window.store.getState().peacock.peacocks;

    return (
      <nav>
        <h2>Peacock Menu</h2>
        { peacocks.map(peacock => < MenuItem peacockName={peacock} key={peacock} selectPeacock={dispatchSelectPeacock} />) }
      </nav>
    );
  }
  
}

export default Menu;
