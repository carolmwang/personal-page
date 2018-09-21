import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="app">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </div>

    );
  }
}

export default App;