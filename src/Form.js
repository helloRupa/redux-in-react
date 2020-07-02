import React, { Component } from 'react';
import { addCat, selectCat } from './actions/catActions';


const dispatchAddCat = cat => {
  window.store.dispatch(addCat(cat));
};

const dispatchSelectCat = cat => {
  window.store.dispatch(selectCat(cat));
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCat: ''
    };
  }

  handleChange = e => {
    this.setState({newCat: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.addCat(this.state.newCat);
    dispatchAddCat(this.state.newCat);
    dispatchSelectCat(this.state.newCat);
    this.setState({newCat: ''});
  }

  render() {
    console.log('render form');

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a Cat</h2>
        <input type="text" value={this.state.newCat} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default Form;
