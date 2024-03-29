import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import LogosTop from "./LogosTop";
import styles from "../App.module.css";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";
class Logos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogoInBottom: false,
            isFading: false,
            linkedInHover: false,
            gitHubHover: false,
        };

        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(value) {
        this.setState({ isFading: value });
        setTimeout(() => this.setState({ isLogoInBottom: value }), 650);
    }

    handleLogoClicked(url) {
        window.open(url, "_blank")
        logEvent(analytics, `clicked_logo_${url}`)
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
                    <IoLogoLinkedin
                        style={{
                            color: "grey",
                            opacity: this.state.linkedInHover ? 0.5 : 1,
                        }}
                        size={"3rem"}
                        className={`${styles.hover}`}
                        onMouseEnter={() => {
                            this.setState({ linkedInHover: true });
                        }}
                        onMouseLeave={() => {
                            this.setState({ linkedInHover: false });
                        }}
                        onClick={() => this.handleLogoClicked("https://www.linkedin.com/in/yves-shum/")}
                    />

                    <IoLogoGithub
                        style={{
                            color: "grey",
                            opacity: this.state.gitHubHover ? 0.5 : 1,
                            cursor: "pointer",
                        }}
                        className={`${styles.hover}`}
                        size={"3rem"}
                        onMouseEnter={() => {
                            this.setState({ gitHubHover: true });
                        }}
                        onMouseLeave={() => {
                            this.setState({ gitHubHover: false });
                        }}
                        onClick={() => this.handleLogoClicked("https://github.com/yvesshum/")}

                    />
                </Animated>
            </div>
        );
    }
}

export default Logos;
