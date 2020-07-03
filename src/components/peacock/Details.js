import React, { Component } from 'react';

const getPeacock = () => window.store.getState().peacock.selectedPeacock;

class Details extends Component {
  constructor() {
    super();

    this.state = {
      selectedPeacock: getPeacock()
    }
  }

  componentDidMount() {
    window.store.subscribe(() => { 
      const storePeacock = getPeacock();

      if (storePeacock !== this.state.selectedPeacock) {
        this.setState({ selectedPeacock: storePeacock });
      }
    });
  }

  render() {
    console.log('render Details');

    return (
      <div>
        <h2>Peacock Details</h2>
        <p>{ getPeacock() }</p>
      </div>
    )
  }
}

export default Details;