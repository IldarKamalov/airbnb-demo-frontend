import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <Content />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
