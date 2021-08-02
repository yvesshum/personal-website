import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { IoLogoPaypal } from "react-icons/io5";
import { Element } from "react-scroll/modules";
import ResumePoint from "../ResumePoint";

export default class Resume extends Component {
    render() {
        return (
            <div style={{ padding: `0 20%` }}>
                <Element name="Resume" />
                <ResumePoint
                    category={"Education"}
                    info={[
                        {
                            icon: <Image src={"uchicagocs.jpg"} style={{ height: "3rem" }} />,
                            primary: "University of Chicago",
                            title: "Masters in Computer Science",
                            date: "Present, Expected June 2022",
                            details: "",
                        },
                        {
                            icon: <Image src={"uchicago.png"} style={{ height: "3rem" }} />,
                            primary: "University of Chicago",
                            title: "B.S. in Computer Science with Specialization in Computer Systems",
                            date: "Sep 2018 - Jun 2021",
                            details: (
                                <div>
                                    <p>Computer Science major that took too many systems classes 😅 </p>
                                    <p>
                                        15400 Intro to Computer Systems | 23200 Intro to Computer Security | 23320
                                        Foundations of Computer Networks | 23360 Advanced Networks | 22200 Computer
                                        Architecture | 23500 Intro to Database Systems | 23010 Parallel Computing |
                                        22300 Functional Programming | 27100 Discrete Mathematics | 27200 Theory of
                                        Algorithms | 28100 Intro to Complexity Theory
                                    </p>
                                </div>
                            ),
                        },
                    ]}
                />
                <ResumePoint
                    category={"Work"}
                    info={[
                        {
                            primary: "PayPal",
                            icon: <Image src={`paypal.jpg`} style={{ height: "3rem" }} />,
                            title: "Software Engineer Intern",
                            date: "Jul 2021 - Present",
                            details: (
                                <ul>
                                    <li>
                                        Developed a full stack application that performs single-variable automated
                                        quantitative analysis, with a friendly UI aimed towards non-technologists to
                                        easily explore relations in their datasets. Used UXPin for UI design, React for
                                        front end development, Swagger for API design, ExpressJS for backend, and a
                                        MySQL database
                                    </li>
                                    <li>
                                        Analyzed weaknesses for MITM phishing attacks on paypal.com using Selenium,
                                        mitmproxy, and webserver logs
                                    </li>
                                    <li>
                                        Devised availability monitoring methods for SRE team's internal products through
                                        analysis of existing collected metrics and interviewing product maintainers,
                                        manager, as well as software engineers
                                    </li>
                                    <li>
                                        Developed SignalFX availability dashboards and alaerting, reducing product
                                        downtime and maintenance delay
                                    </li>
                                </ul>
                            ),
                        },
                        {
                            primary: "Byto",
                            icon: <Image src={`byto_icon.jpg`} style={{ height: "3rem" }} />,
                            title: "Co-Founder & Tech Lead",
                            date: "Nov 2019 - Present",
                            details: (
                                <ul>
                                    <li>
                                        Building a social community platform that bridges employers with job seekers
                                        interested in temporary jobs
                                    </li>
                                    <li>
                                        Led and mentored a team of 10 developers to engineer a amobile app platform from
                                        scratch to AppStore/PlayStore release using React Native & Firebase
                                    </li>
                                    <li>
                                        Designed backend systems to efficiently support a social ecosystem with search,
                                        feed, notification, chat, and more
                                    </li>
                                    <li>
                                        Developed business planning and launch strategies by translating business needs
                                        into feasible technical solutions
                                    </li>
                                </ul>
                            ),
                        },
                        {
                            primary: "UChicago Computer Science Instructional Laboratory",
                            icon: <Image src={`csil.png`} style={{ height: "3rem" }} />,
                            title: "System Administrator and Full Stack Developer",
                            date: "Feb 2019 - Present",
                            details: (
                                <ul>
                                    <li>
                                        Conducting on site and remoate administration of 100 Mac and Ubuntu machines,
                                        imaged with Ansible and Jenkins
                                    </li>
                                    <li>
                                        Spearheaded Ubuntu backend infrastructure migration from VMs to a reverse proxy
                                        + DOcker-based solution, implementing new Jenkins-Docker CI/CD pipelines, along
                                        with writing new Dockerfiles for existing services
                                    </li>
                                    <li>
                                        Integrated Prometheus and Grafana to monitor machine/server states, enabling
                                        immedaite staff alerts on downtime
                                    </li>
                                    <li>
                                        Developed NodeJS backend service to link Google Calendar with a JSON-based
                                        proprietary scheduling system to allow dynamic schedule modification,
                                        eliminating the need to manually type JSON files
                                    </li>
                                </ul>
                            ),
                        },
                        {
                            primary: "The University of Chicago",
                            icon: <Image src={`uchicagocs.jpg`} style={{ height: "3rem" }} />,
                            title: "Teaching Assistant for 20600 Introduction to Robotics",
                            date: "Apr 2021 - Jun 2021",
                            details: (
                                <ul>
                                    <li>
                                        Led discussions on class activities and guiding students on their class projects on ROS/Gazebo on topics such as robot localization, manipulation, sensory-motor control, reinforcement learning, kinematics, and vision
                                    </li>
                                </ul>
                            ),
                        },
                    ]}
                />
            </div>
        );
    }
}
