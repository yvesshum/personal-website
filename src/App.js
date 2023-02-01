  
import { logEvent } from 'firebase/analytics';
import React, { Component } from 'react';
import './App.module.css';
import About from './Components/Pages/About';
import Contact from "./Components/Pages/Contact";
import HomeHeader from './Components/Pages/HomeHeader';
import Projects from './Components/Pages/Projects';
import Resume from './Components/Pages/Resume';
import { analytics } from './firebase';
class App extends Component {
  constructor(props) {
    super(props)
    logEvent(analytics, "Initialized")
  }
  render() {
    return (  
      <div className="App">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Noto+Sans&display=swap');
        </style>
        <style>
        @import "react-alice-carousel/lib/alice-carousel.css";
        </style>
        <HomeHeader/>
        <About/>
        <Resume/>
        <Projects/> 
        <Contact/>
      </div>
    );
  }
}

export default App;