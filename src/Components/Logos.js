import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import LogosTop from "./LogosTop";

class Logos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogoInBottom: false,
            isFading: false,
        };

        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(value) {
        this.setState({ isFading: value });
        setTimeout(() => this.setState({ isLogoInBottom: value }), 650);
    }

    render() {
        return (
            <div>
                <LogosTop toggleParentStateHandler={this.toggleState} />
                <Animated
                    animationIn="fadeInDown"
                    animationOut="fadeOutUp"
                    isVisible={this.state.isFading}
                    style={{
                        position: "fixed",
                        bottom: 5,
                        right: 5,
                        display: "flex",
                        flexDirection: "column",
                        visible: this.state.isLogoBottom ? "visible" : "hidden",
                    }}
                >
                    <IoLogoLinkedin style={{ color: "white" }} size={"3rem"} />
                    <IoLogoGithub style={{ color: "white" }} size={"3rem"} />
                </Animated>
            </div>
        );
    }
}

export default Logos;
