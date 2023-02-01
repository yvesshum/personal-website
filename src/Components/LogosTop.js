import React, { Component } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import handleViewport from "react-in-viewport";
import styles from "../App.module.css"

class LogosTop extends Component {
    shouldComponentUpdate(nextProps) {        
        return (nextProps.inViewport !== this.props.inViewport)
    }

    componentDidUpdate() {
        this.props.toggleParentStateHandler(!this.props.inViewport);
    }

  render() {
      return (
        <div style={{justifyContent: 'space-between', width: "7rem", display: 'flex'}}>
          <IoLogoLinkedin style={{ color: "white" }} size={"3rem"} className={`${styles.hover}`} onClick={() => window.open("https://www.linkedin.com/in/yves-shum/", "_blank")}/>
          <IoLogoGithub style={{ color: "white" }} size={"3rem"} className={`${styles.hover}`} onClick={() => window.open("https://github.com/yvesshum", "_blank")}/>
        </div>
      );
  }
}

export default handleViewport(LogosTop, { rootMargin: "-1.0px" });
