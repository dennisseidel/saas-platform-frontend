import React, { Component } from 'react';
import Layout from './layouts/LandingpageLayout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout header={<Header/>} footer={<Footer/>}>
          <Home />
        </Layout>
      </div>
    );
  }
}

export default App;