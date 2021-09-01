import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Element } from "react-scroll/modules";
import styles from "../../App.module.css";
const projects = [
    {
        img: "Shellcraft.png",
        alt: "Shellcraft",
        title: "Shellcraft",
        details:
            "Hackathon Winner! Built a minecraft-like video game to be played in a shell using Python's curses library. Includes randomized terrain generation, computer blocks, physics, explosions, and more!",
        links: [
            {
                href: "https://github.com/dwahme/shellcraft",
                text: "Git",
            },
            {
                href: "https://devpost.com/software/shellcraft",
                text: "DevPost",
            },
        ],
    },
    {
        img: "PersonalWebsite.png",
        alt: "Website screenshot",
        title: "Personal Website",
        details: "Interested in how this website was made with React? Check out the repo below!",
        links: [
            {
                href: "https://github.com/yvesshum/personal-website",
                text: "Git"
            }
        ]
    },
    {
        img: "Byto.png",
        alt: "Byto",
        title: "Byto",
        details:
            "Co-Founded a startup to connect hourly & temporary job seekers with employers. Led a team of 10 developers to build a React Native mobile app with Firebase",
        links: [
            {
                href: "https://byto.tech",
                text: "Website",
            },
            {
                href: "https://apps.apple.com/us/app/byto/id1533768965",
                text: "AppStore",
            },
            {
                href: "https://play.google.com/store/apps/details?id=com.byto.bytoapp",
                text: "PlayStore"
            }
        ],
    },
    {
        img: "pacturtle.png",
        alt: "Pacturtle",
        title: "Pacturtle",
        details:
            "Built PacMan with Turtlebot Robotics. There are 4 'Ghost' turtlebots that chases the player's robot through localization, perception, and manipulation algorithms.",
        links: [
            {
                href: "https://github.com/jjrsoong/final_project",
                text: "Git",
            }
        ],
    },
    {
        img: "coup.png",
        alt: "Coup",
        title: "Coup",
        details:
            "Built the Coup boardgame with Elm and React, featuring online play powered by Firebase",
        links: [
            {
                href: "https://github.com/yvesshum/elm-project/tree/master/part3",
                text: "Git",
            }
        ],
    },
    {
        img: "Glim.png",
        alt: "Glim",
        title: "Glim",
        details:
            "Hackathon Winer! Built a react-native mobile app that revolutionalizes the debt repayment process through an interactive friendly mascot to make repaying debts less daunting",
        links: [
            {
                href: "https://github.com/PayPalHack-Chicago/Team-1",
                text: "Git",
            },
            {
                href: "https://devpost.com/software/team-1-ayn4vs",
                text: "DevPost",
            },
        ],
    },
    {
        img: "TechTeam.png",
        alt: "TechTeam",
        title: "TechTeam",
        details:
            "Built a Vue+Firebase webapp for a non-profit organization to digitalize their youth volunteering system, featuring hour logging, order placement, blogs, statistics, and more!",
        links: [
            {
                href: "https://github.com/yvesshum/bikeshop-webapp",
                text: "Git",
            }
        ],
    },
];

export default class Projects extends Component {
    renderProjectCard = ({img, alt, title, details, links}) => (
        <div className={styles.projectCardContainer}>
            <img src={img} className={styles.projectCard} alt={alt} />
            <div className={styles.projectCardOverlay}>
                <h4 className={styles.white}>{title}</h4>
                <p className={styles.white}>{details}</p>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    {links.map((link) => (
                        <a style={{ color: "var(--color-blue-200)" }} href={link.href} target="_blank">
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    render() {
        const items = projects.map(p => this.renderProjectCard(p));

        

        return (
            <div style={{ padding: `5rem 5%`, backgroundColor: "#2b2b2b" }}>
                <Element id="Projects" />
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
