import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import Family from './components/Family';
import Education from './components/Education';
import Contributions from './components/Contributions';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Hobbies />
      <Family />
      <Education />
      <Contributions />
      <Footer />
    </div>
  );
}

export default App;