import React, { Component } from "react";
import { Image } from "react-bootstrap";
import styles from "../../App.module.css";
import { Element } from "react-scroll";
import TypistLoop from "../TypistLoop";
import Typist from "react-typist";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transformLeft: 0,
            transformRight: 0,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = window.pageYOffset;
        let threshold = window.innerHeight / 3;
        let itemTranslateL = Math.min(0, scrollTop / 2 - threshold);
        let itemTranslateR = Math.max(0, threshold - scrollTop / 2);
        this.setState({ transformLeft: itemTranslateL, transformRight: itemTranslateR });
    };

    render() {
        return (
            <div
                style={{
                    backgroundColor: "#2b2b2b",
                    paddingLeft: "min(20%, 2rem)",
                    paddingRight: "min(20%, 2rem)",
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                }}
            >
                <Element name="About" />
                <div className={styles.split}>
                    <div className={styles.left}>
                        <Image
                            src="yves.png"
                            rounded
                            style={{
                                width: "16rem",
                                transform: `translate(${this.state.transformLeft}px, 0px)`,
                                justifySelf: "center",
                            }}
                        />
                    </div>

                    <div
                        className={styles.right}
                        style={{ transform: `translate(${this.state.transformRight}px, 0px)` }}
                    >
                        <h1 className={` ${styles.white} ${styles.mono}`}>About me</h1>
                        <TypistLoop
                            className={styles.tagline}
                            avgTypingDelay={40}
                            cursor={{
                                show: true,
                                blink: true,
                                element: "|",
                                hideWhenDone: false,
                                hideWhenDoneDelay: 1000,
                            }}
                        >
                            $ Student | Full Stack | Gamer | out &gt; Yves.js {" "}
                        </TypistLoop>
                        <p className={`${styles.grey} ${styles.sans}`}>
                            Hi! I'm a software engineer who likes to build things! I'm currently working as a Senior Developer at{" "}
                            <a href="https://diffusefunds.com/" target="_blank" className={styles.darklink}>
                                Diffuse Inc
                            </a>
                            .
                        </p>

                        <p className={`${styles.grey} ${styles.sans}`}>
                            I've graduated with a M.S. and B.S. in Computer Science at UChicago, and during my time there I've worked as a Teaching Assistant for{" "}
                            <a
                                className={styles.darklink}
                                href="https://classes.cs.uchicago.edu/archive/2021/spring/20600-1/index.html"
                                target="_blank"
                            >
                                Intro to Robotics
                            </a>
                            , a Full Stack Developer at the{" "}
                            <a className={styles.darklink} href="https://csil.cs.uchicago.edu" target="_blank">
                                Computer Science Instructional Laboratory
                            </a>
                            , a Project Lead at{" "}
                            <a href="https://www.uchicagotechteam.com/" target="_blank" className={styles.darklink}>
                                Tech Team
                            </a>
                            , and a Tech Lead at{" "}
                            <a href="https://www.byto.tech/" target="_blank" className={styles.darklink}>
                                Byto
                            </a>{" "}
                            (a startup co-founded with my college friends). I have also worked as a Software Engineering
                            Intern at PayPal for two Summers.
                        </p>

                        <p className={`${styles.grey} ${styles.sans}`}>
                            Outside of work you can often find me doing Archery, attending Hackathons, or building cool
                            and weird contraptions in video games such as{" "}
                            <a
                                href="https://www.klei.com/games/oxygen-not-included"
                                target="_blank"
                                className={styles.darklink}
                            >
                                Oxygen Not Included
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://store.steampowered.com/app/294100/RimWorld/"
                                target="_blank"
                                className={styles.darklink}
                            >
                                Rimworld
                            </a>
                            .
                        </p>
                    </div>
                </div>

                {/* <div
                    style={{ transform: `translate(${this.state.transformRight}px, 0px)`, marginTop: "1rem" }}
                    className={styles.split}
                >
                    <div className={styles.left}>
                        <div style={{ width: "10rem" }}></div>
                    </div>
                    <div className={styles.right}>
                        <h1 className={`${styles.mono} ${styles.white}`}>Contact</h1>
                        <p className={`${styles.grey} ${styles.sans}`}>Yves Shum</p>
                        <p className={`${styles.grey} ${styles.sans}`}>yvesshum1210@gmail.com</p>
                    </div>
                </div> */}
            </div>
        );
    }
}
