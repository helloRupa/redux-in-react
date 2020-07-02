import React, { Component } from 'react';

class Details extends Component {

  componentDidMount() {
    window.store.subscribe(() => { this.forceUpdate(); });
  }

  render() {
    console.log('render Details');

    return (
      <div>
        <h2>Cat Details</h2>
        <p>{ window.store.getState().selectedCat }</p>
      </div>
    )
  }
}

export default Details;