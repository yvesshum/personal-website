import React, { Component } from "react";
import { Image } from "react-bootstrap";
import styles from "../../App.module.css"
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transformLeft: 0,
      transformRight: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let scrollTop = window.pageYOffset
    console.log(window.pageYOffset, window.innerHeight)
    let threshold = window.innerHeight / 3
    let itemTranslateL = Math.min(0, scrollTop/2 - threshold)
    let itemTranslateR = Math.max(0, threshold -  scrollTop/2)
    this.setState({transformLeft: itemTranslateL, transformRight: itemTranslateR})
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#2b2b2b",
          paddingLeft: "20%",
          paddingRight: "20%",
          paddingTop: "5rem",
          paddingBottom: "4rem"
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div style={{ flex: 1 }}>
            <Image
              src="yves.png"
              rounded
              style={{ width: "10rem", float: "right", transform: `translate(${this.state.transformLeft}px, 0px)`}}
            />
          </div>

          <div style={{ flex: 2, paddingLeft: "5rem", transform: `translate(${this.state.transformRight}px, 0px)` }}>
            <h1 className={`title ${styles.white} ${styles.mono}`}>
              About me
            </h1>
            <p className={`${styles.grey} ${styles.sans}`}>
              I'm a software engineer wekl;rjew klewjkwel jewkljlekwjkwer
              lwewellkwewelkwrklwejr elkjrewklr ewlweklrkwe jekwlrwelk
              rlwkejkwle klwer jkwl wklj
            </p>
          </div>
        </div>

        <div style={{ flexDirection: "row", display: "flex", paddingTop: "2rem", transform: `translate(${this.state.transformRight}px, 0px)`  }}>
          <div style={{ flex: 1 }}><div></div></div>
          <div style={{ flex: 2, paddingLeft: "5rem" }}>
            <h1 className={`${styles.mono} ${styles.white}`}>
              Contact
            </h1>
            <p className={`${styles.grey} ${styles.sans}`}>Yves Shum</p>
            <p className={`${styles.grey} ${styles.sans}`}>yvesshum1210@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}
