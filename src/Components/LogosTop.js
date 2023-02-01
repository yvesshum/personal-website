import React, { Component } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import handleViewport from "react-in-viewport";
import styles from "../App.module.css";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

class LogosTop extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.inViewport !== this.props.inViewport;
    }

    componentDidUpdate() {
        this.props.toggleParentStateHandler(!this.props.inViewport);
    }

    handleLogoClicked(url) {
        window.open(url, "_blank");
        logEvent(analytics, `clicked_logo_${url}`);
    }

    render() {
        return (
            <div style={{ justifyContent: "space-between", width: "7rem", display: "flex" }}>
                <IoLogoLinkedin
                    style={{ color: "white" }}
                    size={"3rem"}
                    className={`${styles.hover}`}
                    onClick={() => this.handleLogoClicked("https://www.linkedin.com/in/yves-shum/")}
                />
                <IoLogoGithub
                    style={{ color: "white" }}
                    size={"3rem"}
                    className={`${styles.hover}`}
                    onClick={() => this.handleLogoClicked("https://github.com/yvesshum")}
                />
            </div>
        );
    }
}

export default handleViewport(LogosTop, { rootMargin: "-1.0px" });
