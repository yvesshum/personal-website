import React, { Component } from "react";
import { IoBriefcase, IoLogoPaypal } from "react-icons/io5";
import { Element } from "react-scroll/modules";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import config from "../../config.json";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase";

function mapIconNameToComponent(name) {
    switch (name) {
        case "Briefcase":
            return <IoBriefcase />;
        case "LogoPaypal":
            return <IoLogoPaypal />;
        default:
            return <IoBriefcase />;
    }
}
export default class Resume extends Component {
    handleTimelineElementClick = (title) => {
        logEvent(analytics, `clicked_${title}`);
        window.open("https://www.linkedin.com/in/yves-shum/", "_blank");
    };

    renderVerticalTimelineElement = (title, company, desc, date, icon, index) => (
        <VerticalTimelineElement
            key={index}
            onTimelineElementClick={() => this.handleTimelineElementClick(title)}
            iconOnClick={() => window.open("https://www.linkedin.com/in/yves-shum/", "_blank")}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--color-dark-space)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid var(--color-dark-space)" }}
            date={date}
            iconStyle={{ background: "var(--color-dark-black)", color: "#fff", borderColor: "coral" }}
            icon={icon}
        >
            <h3 className="vertical-timeline-element-title" style={{ color: "var(--color-dark-yellow" }}>
                {title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">{company}</h4>
            <p>{desc}</p>
        </VerticalTimelineElement>
    );

    render() {
        return (
            <div style={{ padding: `0 15%`, backgroundColor: "#2b2b2b" }}>
                <Element name="Resume" />
                <div>
                    <VerticalTimeline className="customline">
                        {config.resume.map(({ title, company, dates, description, icon }, index) => (
                                this.renderVerticalTimelineElement(
                                    title,
                                    company,
                                    description,
                                    dates,
                                    mapIconNameToComponent(icon),
                                    index
                                )
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        );
    }
}
