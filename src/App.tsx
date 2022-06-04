import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer';
import Hero from './components/hero';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
