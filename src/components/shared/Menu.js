import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevItems: this.props.getItems()
    }
  }

  componentDidMount() {
    window.store.subscribe(() => {
      const storeItems = this.props.getItems();

      if (this.state.prevItems !== storeItems) {
        this.setState({ prevItems: storeItems });
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
