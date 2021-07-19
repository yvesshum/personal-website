import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { IoLogoPaypal } from "react-icons/io5";
import ResumePoint from "../ResumePoint";

export default class Resume extends Component {
  render() {
    return (
      <div style={{padding: "0 20%"}}>
        <ResumePoint
          category={"Education"}
          info={[
            {
              primary: "University of Chicago",
              title: "Masters in Computer Science",
              date: "Present, Expected June 2022",
              details: "Just a CS Masters student",
            },
            {
                primary: "University of Chicago",
                title: "B.S. in Computer Science with Specialization in Computer Systems",
                date: "Sep 2018 - Jun 2021",
                details: "Computer Science major that took too many systems classes "
            }
          ]}
        />
        <ResumePoint category={"Work"} 
            info={[
                {
                    primary: "PayPal",
                    icon: <Image src={`paypal.jpg`} style={{height: "3rem"}}/>,
                    title: "Software Engineer Intern",
                    date: "Jul 2021 - Present",
                    details: "Full Stack development of a data triage application, designed REST APIs, mockups with UXPin, and frontend with Fluent-UI"
                },
                {
                    primary: "Byto",
                    icon: <Image src={`byto_icon.jpg`} style={{height: "3rem"}}/>,
                    title: "Co-Founder & Tech Lead",
                    date: "Nov 2019 - Present",
                    details: <ul>
                        <li>Spearheading a team of 10 developers to build an iOS mobile app using React Native, Firebase, and Algolia </li>
                        <li>Pioneering multiple areas of product development such as establishing development ecosystems, implementing and designing scalable product architecture, engineering and communicating solutions for new feature requests</li>
                        <li>Supporting developers by mentoring and reviewing code for best practices, delegating tasks based on development priorities and individual capabilities, maintaining positive team dynamic for sharing ideas and asking for help</li>
                    </ul>
                }
            ]}
        />
      </div>
    );
  }
}
