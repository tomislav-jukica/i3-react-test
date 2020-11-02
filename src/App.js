import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Gallery from './containers/Gallery/Gallery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Gallery />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
