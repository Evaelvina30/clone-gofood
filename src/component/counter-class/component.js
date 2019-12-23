import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Counter extends React.Component {
  state = {
    number: 100
  };

  tambah = () => {
    this.setState({ number: this.state.number + 1 });
  };

  kurang = () => {
    this.setState({ number: this.state.number - 1 });
  };

  pembagian = () => {
    this.setState({ number: this.state.number / 2 });
  };

  perkalian = () => {
    this.setState({ number: this.state.number * 2 });
  };

  render() {
    return (
      <div>
        <h1>Ini Class Component</h1>
        <h1>{this.state.number}</h1>
        <Button onClick={this.tambah} style={{ backgroundColor: 'red' }}>
          +
        </Button>
        <Button onClick={this.kurang} style={{ backgroundColor: 'red' }}>
          -
        </Button>
        <Button onClick={this.pembagian} style={{ backgroundColor: 'red' }}>
          /
        </Button>
        <Button onClick={this.perkalian} style={{ backgroundColor: 'red' }}>
          *
        </Button>
      </div>
    );
  }
}

export default Counter;
