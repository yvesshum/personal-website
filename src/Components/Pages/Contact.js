import React, { Component } from "react";
import styles from "../../App.module.css";
import { Element } from "react-scroll";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase";

export default class Contact extends Component {
    onResumeClick(e) {
        e.preventDefault()
        logEvent(analytics, "click_resume")
        window.open("https://drive.google.com/drive/folders/1e9SAfcFpb3ZFQZ3so2fx4ONX5k-QsPyD?usp=share_link", "_blank")
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: "#2b2b2b",
                    paddingLeft: "min(20%, 2rem)",
                    paddingRight: "min(20%, 2rem)",
                    paddingBottom: "5rem",
                }}
            >
                <Element name="Contact" />

                <div style={{ textAlign: "center" }}>
                    <div>
                        <h1 className={`${styles.mono} ${styles.white}`} style={{ marginBottom: "1rem" }}>
                            Want to get in touch?
                        </h1>
                        <p className={`${styles.grey} ${styles.sans}`}>
                            Shoot me an email:{" "}
                            <a
                                href="mailto:yvesshum1210@gmail.com"
                                target="_blank" rel="noreferrer"
                                style={{ color: "var(--color-green-400)" }}
                            >
                                yvesshum1210@gmail.com
                            </a>
                        </p>
                        <p className={`${styles.grey} ${styles.sans}`}>
                            Or check out my{" "}
                            <a
                                href="https://drive.google.com/drive/folders/1e9SAfcFpb3ZFQZ3so2fx4ONX5k-QsPyD?usp=share_link"
                                target="_blank" rel="noreferrer"
                                onClick={this.onResumeClick}
                                style={{ color: "var(--color-blue-200)" }}
                            >
                                resume
                            </a>
                            !
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
