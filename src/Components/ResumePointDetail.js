import React, { Component } from "react";
import styles from "../App.module.css";
export default class ResumePointDetail extends Component {
  render() {
    return (
      <div
        style={{ marginBottom: "3rem", display: "flex", flexDirection: "row",}}
      >
        <div style={{flex: 1}}>{this.props.icon}</div>
        <div style={{flex: 9}}>
          <h4>{this.props.primary}</h4>
          <p>
            <span style={{ fontStyle: "italic" }}>{this.props.title}</span> |{" "}
            <span>{this.props.date}</span>
          </p>
          <span>{this.props.details}</span>
        </div>
      </div>
    );
  }
}
