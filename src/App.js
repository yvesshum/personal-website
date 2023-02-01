  
import React, { Component } from 'react';
import './App.module.css';
import HomeHeader from './Components/Pages/HomeHeader';
import About from './Components/Pages/About';
import Resume from './Components/Pages/Resume';
import Projects from './Components/Pages/Projects';
import Contact from "./Components/Pages/Contact";

class App extends Component {
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
        

        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        {/* <Footer data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}

export default App;