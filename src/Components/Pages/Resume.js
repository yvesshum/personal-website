import React, { Component } from "react";
import { IoBriefcase, IoLogoPaypal } from "react-icons/io5";
import { Element } from "react-scroll/modules";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default class Resume extends Component {
    renderVerticalTimelineElement = (title, company, desc, date, icon) => (
        <VerticalTimelineElement
            onTimelineElementClick={() => window.open("https://www.linkedin.com/in/yves-shum/", "_blank")}
            iconOnClick={() => window.open("https://www.linkedin.com/in/yves-shum/", "_blank")}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--color-dark-space)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid var(--color-dark-space)" }}
            date={date}
            iconStyle={{ background: "var(--color-dark-black)", color: "#fff", borderColor: "coral" }}
            icon={icon}
        >
            <h3 className="vertical-timeline-element-title" style={{color: "var(--color-dark-yellow"}}>{title}</h3>
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
                        {this.renderVerticalTimelineElement(
                            "Senior Developer",
                            "Diffuse Inc",
                            "Full Stack, TS/JS, AWS, Solidity",
                            "Sep 2021 - Present",
                            <IoBriefcase/>
                        )}
                        {this.renderVerticalTimelineElement(
                            "Software Engineering Intern",
                            "PayPal",
                            "Full Stack, React, Express, MySQL",
                            "Jul 2021 - Sep 2021",
                            <IoLogoPaypal/>
                        )}
                        {this.renderVerticalTimelineElement(
                            "TA for Intro to Robotics",
                            "University of Chicago",
                            "ROS, localization, manipulation, sensory-motor control, reinforcement learning, kinematics, vision",
                            "Mar 2021 - Jun 2021",
                            <IoBriefcase/>
                        )}
                        {this.renderVerticalTimelineElement(
                            "Site Reliability Engineering Intern",
                            "PayPal",
                            "Monitoring, Observability, Availability, Splunk, SignalFX",
                            "Jun 2020 - Sep 2021",
                            <IoLogoPaypal/>
                        )}
                        {this.renderVerticalTimelineElement(
                            "Co-Founder & Tech Lead",
                            "Byto",
                            "Project Management, Mentorship, Leadership, React Native, Firebase",
                            "Nov 2019 - Present",
                            <IoBriefcase/>
                        )}
                        {this.renderVerticalTimelineElement(
                            "Systems Administrator",
                            "UChicago Computer Science Instructional Laboratory",
                            "Docker, Jenkins, Ansible, NGINX, NodeJS, Linux, OSX",
                            "Jan 2019 - Present",
                            <IoBriefcase/>
                        )}{this.renderVerticalTimelineElement(
                            "Project Manager & Developer",
                            "UChicago TechTeam",
                            "Web Development, Product Management, VueJS, Firebase",
                            "Apr 2019 - Jul 2021",
                            <IoBriefcase/>
                        )}
                    </VerticalTimeline>
                </div>
            </div>
        );
    }
}
