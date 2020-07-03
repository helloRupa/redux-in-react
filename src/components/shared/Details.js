import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: this.props.getItem()
    }
  }

  componentDidMount() {
    window.store.subscribe(() => { 
      const storeItem = this.props.getItem();

      if (storeItem !== this.state.selectedItem) {
        this.setState({ selectedItem: storeItem });
      }
    });
  }

  render() {
    console.log('render Details');

    return (
      <div>
        <h2>{this.props.animal} Details</h2>
        <p>{ this.props.getItem() }</p>
      </div>
    )
  }
}

export default Details;