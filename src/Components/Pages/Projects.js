import React, { Component } from "react";
import useWindowdimensions from "../../Hooks/useWindowDimensions";
import Header from "./Header"
import { IoArrowDownCircleSharp } from "react-icons/io5"
import styles from "../../App.module.css"
import Logos from "../Logos";
import { Element } from "react-scroll/modules";
export default class Projects extends Component {
  render() {
    return (
      <div
        style={{height: 100, backgroundImage: `url("IMG-20171230-WA0017.jpg")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        id="Projects"
      >
      </div>
    );
  }
}
