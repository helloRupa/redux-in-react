import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newAnimal: ''
    };
  }

  handleChange = e => {
    this.setState({newAnimal: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.add(this.state.newAnimal);
    this.props.select(this.state.newAnimal);
    this.setState({newAnimal: ''});
  }

  render() {
    console.log('render form');

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a {this.props.animal}</h2>
        <input type="text" value={this.state.newAnimal} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default Form;
