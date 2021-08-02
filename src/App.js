  
import React, { Component } from 'react';
import './App.module.css';
import Header from './Components/Pages/Header';
import Home from "./Components/Pages/Home"
// import Footer from './Components/Footer';
import About from './Components/Pages/About';
import Resume from './Components/Pages/Resume';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import Projects from './Components/Pages/Projects';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
// import Portfolio from './Components/Portfolio';


class App extends Component {
  render() {
    return (  
      <div className="App">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Noto+Sans&display=swap');
        </style>
        <Header/>
        <Home/>
        <About/>
        <Resume/>
        <Projects/> 
        

        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        {/* <Footer data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}

export default App;