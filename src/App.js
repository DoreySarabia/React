import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from './components/containers/Gallery';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gallery   /> 
        <Footer />
      </div>
    );
  }
}

export default App;
