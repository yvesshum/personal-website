import React, { Component } from "react";
import useWindowdimensions from "../../Hooks/useWindowDimensions";
import Header from "./Header"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import styles from "../../App.module.css"
import Logos from "../Logos";
export default class Home extends Component {
  constructor(props) {
    super(props);
    window.addEventListener("resize", this.handleResize);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }

  handleResize = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize)
  }

  render() {
    return (
      <div
        style={{ height: this.state.height, backgroundImage: `url("IMG-20171230-WA0017.jpg")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
          <div style={{display: "flex", height: "70%", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <h1 style={{textAlign: "center", fontSize: 70, color: "white"}} >Hi, I'm Yves!</h1>
            <h3 className={styles.white}>I'm a Full Stack Software Engineer</h3>
            <hr style={{width: "60%", margin: "10 auto", borderColor: "white"}}/>
            <div style={{justifyContent: "space-between", display: "flex", width: "7rem"}}>
              <Logos/>
            </div>
          </div>
            
      </div>
    );
  }
}
