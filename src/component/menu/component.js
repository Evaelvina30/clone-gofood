import React from 'react';

class Menu extends React.Component {
  state = {
    menu: [
      {
        makanan: 'bakso',
        harga: 10000
      },
      {
        makanan: 'nasi goreng',
        harga: 15000
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <h1>Eva Elvina mau makan</h1>
        <h1>Makanan: {this.state.menu[1].makanan}</h1>
        <h1>Harga: {this.state.menu[1].harga}</h1>
      </React.Fragment>
    );
  }
}

export default Menu;
