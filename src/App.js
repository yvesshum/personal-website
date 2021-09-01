  
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
import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCRSTprdK7-XCxs8BgPPstwTb6k_GvYUGE",
  authDomain: "personal-website-2766c.firebaseapp.com",
  databaseURL: "https://personal-website-2766c.firebaseio.com",
  projectId: "personal-website-2766c",
  storageBucket: "personal-website-2766c.appspot.com",
  messagingSenderId: "842954854795",
  appId: "1:842954854795:web:c3116b1a38de8f58739f8e",
  measurementId: "G-2G1SXML25L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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