import React, { Component } from 'react';

import Modal from './Modal';
import MainObject from './MainObject.js';
class App extends Component {
  render() {
    return (
      <div>
        <h2>Oсновной обьект</h2>
        <MainObject />
        <Modal />
      </div>
    );
  }
}

export default App;
