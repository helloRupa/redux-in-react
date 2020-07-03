import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevLength: this.props.getItems().length
    }
  }

  componentDidMount() {
    window.store.subscribe(() => {
      const storeLength = this.props.getItems().length;

      if (this.state.prevLength !== storeLength) {
        this.setState({ prevLength: storeLength });
      }
    });
  }
  
  render() {
    console.log('render Menu');
    const items = this.props.getItems();

    return (
      <nav>
        <h2>{this.props.animal} Menu</h2>
        { items.map(item => < MenuItem name={item} key={item} select={this.props.select} />) }
      </nav>
    );
  }
  
}

export default Menu;
