import React, { Component } from 'react';
import { addPeacock, selectPeacock } from '../../actions/peacockActions';


const dispatchAddPeacock = peacock => {
  window.store.dispatch(addPeacock(peacock));
};

const dispatchSelectPeacock = peacock => {
  window.store.dispatch(selectPeacock(peacock));
};

class Form extends Component {
  constructor() {
    super();

    this.state = {
      newPeacock: ''
    };
  }

  handleChange = e => {
    this.setState({newPeacock: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    dispatchAddPeacock(this.state.newPeacock);
    dispatchSelectPeacock(this.state.newPeacock);
    this.setState({newPeacock: ''});
  }

  render() {
    console.log('render form');

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a Peacock</h2>
        <input type="text" value={this.state.newPeacock} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default Form;
