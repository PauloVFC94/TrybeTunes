import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <input type="text" placeholder="Pesquisar" />
      </div>
    );
  }
}

export default Album;
