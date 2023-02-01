import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Element } from "react-scroll/modules";
import styles from "../../App.module.css";
import config from "../../config.json"

export default class Projects extends Component {
    renderProjectCard = ({img, alt, title, details, links}) => (
        <div className={styles.projectCardContainer}>
            <img src={img} className={styles.projectCard} alt={alt} />
            <div className={styles.projectCardOverlay}>
                <h4 className={styles.white}>{title}</h4>
                <p className={styles.white}>{details}</p>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    {links.map((link) => (
                        <a style={{ color: "var(--color-blue-200)" }} href={link.href} target="_blank" rel="noreferrer">
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    render() {
        const items = config.projects.map(p => this.renderProjectCard(p));

        

        return (
            <div style={{ padding: `5rem 5% 1.5rem 5%`, backgroundColor: "#2b2b2b" }}>
                <Element id="Projects" />
                <h1 className={` ${styles.white} ${styles.mono} ${styles["text-center"]}`} >
                    Here are some projects I've done throughout college
                </h1>
                <br/>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    // autoPlay
                    infinite
                    autoWidth
                    autoPlayInterval={5000}
                    animationDuration={1200}
                    touchMoveDefaultEvents={false}
                />
            </div>
        );
    }
}
