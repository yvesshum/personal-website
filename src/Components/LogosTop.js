import React, { Component } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import handleViewport from "react-in-viewport";

class LogosTop extends React.Component {
    shouldComponentUpdate(nextProps) {        
        return (nextProps.inViewport !== this.props.inViewport)
    }

    componentDidUpdate() {
        this.props.toggleParentStateHandler(!this.props.inViewport);
    }

  render() {
      return (
        <div>
          <IoLogoLinkedin style={{ color: "white" }} size={"3rem"} />
          <IoLogoGithub style={{ color: "white" }} size={"3rem"} />
        </div>
      );
  }
}

export default handleViewport(LogosTop, { rootMargin: "-1.0px" });
