import React, { Component } from 'react';

const getCat = () => window.store.getState().cat.selectedCat;

class Details extends Component {
  constructor() {
    super();

    this.state = {
      selectedCat: getCat()
    }
  }

  componentDidMount() {
    window.store.subscribe(() => { 
      const storeCat = getCat();

      if (storeCat !== this.state.selectedCat) {
        this.setState({ selectedCat: storeCat });
      }
    });
  }

  render() {
    console.log('render Details');

    return (
      <div>
        <h2>Cat Details</h2>
        <p>{ getCat() }</p>
      </div>
    )
  }
}

export default Details;