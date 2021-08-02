import React, { Component } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
export default class Projects extends Component {
  render() {
    const items = []

    return (
      <div style={{ padding: `0 15%`, backgroundColor: "#2b2b2b" }}>
        <AliceCarousel mouseTracking items={items} />
      </div>
    );
  }
}
