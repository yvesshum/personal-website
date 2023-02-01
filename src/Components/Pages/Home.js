import React, { Component } from "react";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import { scroller } from "react-scroll";
import { Element } from "react-scroll/modules";
import styles from "../../App.module.css";
import Logos from "../Logos";
import { scrollOpts } from "./Header";

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
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <div
                style={{
                    height: this.state.height,
                    backgroundImage: `url("IMG-20171230-WA0017.jpg")`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <Element name="Home" />

                <div
                    style={{
                        display: "flex",
                        height: "70%",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <h1 style={{ textAlign: "center", fontSize: "3.5rem", color: "white" }}>Hi, I'm Yves!</h1>
                    <h3 className={styles.white} style={{textAlign: "center", fontSize: "2rem"}}>I'm a Full Stack Software Engineer</h3>
                    <hr style={{ width: "60%", margin: "10 auto", borderColor: "white" }} />
                    <div style={{ justifyContent: "space-between", display: "flex", width: "7rem" }}>
                        <Logos />
                    </div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        right: "50%",
                        bottom: "10%",
                        transform: "translate(-1.5rem, 0px)",
                    }}
                    onClick={() => {
                        scroller.scrollTo("About", { ...scrollOpts, offset: -70 });
                    }}
                    className={`${styles.hover}`}
                >
                    <IoArrowDownCircleSharp size={"3rem"} color="white" />
                </div>
            </div>
        );
    }
}
