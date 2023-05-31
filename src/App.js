import React from 'react';
import Navbar from './Navbar'

//import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />


      <HeaderContainer />

      <HomeContainer />

      <br />



      <Footer />

    </div>
  );
}

export default App;
