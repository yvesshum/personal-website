import React, { Component } from "react";
import styles from "../App.module.css"
import ResumePointDetail from "./ResumePointDetail";
export default class ResumePoint extends Component {
  render() {
    let info = this.props.info || [];
    return (
      <div style={{margin: "4rem 5rem", display: "flex"}}>
          <div style={{flex: 1}}>
              <div >
                <span className={styles.mono} style={{borderBottom: "3px solid dodgerblue", fontSize: 27}}>{this.props.category}</span>
              </div>
          </div>
          <div style={{flex: 3}}>
              {
                  info.map((d, i) => {
                      return <ResumePointDetail key={i} {...d}/>
                  })
              }
          </div>

      </div>
    );
  }
}
