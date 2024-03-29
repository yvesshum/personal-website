import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";

export const scrollOpts = {
    smooth: true,
    durationduration: 1000,
    offset: -80,
};

export default class Header extends Component {
    render() {
        return (
            <div style={{ position: "relative", justifySelf: "center" }}>
                <Navbar activekey="/home" collapseOnSelect expand="lg" fixed="top" variant="dark" bg={this.props.isBackgroundVisible ? "dark" : "transparent"}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto justify-content-center">
                            <Nav.Link
                                onClick={() => {
                                    scroller.scrollTo("Home", scrollOpts);
                                }}
                                style={{ mixBlendMode: "difference", }}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    scroller.scrollTo("About", scrollOpts);
                                }}
                                style={{ mixBlendMode: "difference" }}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    scroller.scrollTo("Resume", scrollOpts);
                                }}
                                style={{ mixBlendMode: "difference" }}
                            >
                                Work Experience
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    scroller.scrollTo("Projects", scrollOpts);
                                }}
                                style={{ mixBlendMode: "difference" }}
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    scroller.scrollTo("Contact", scrollOpts);
                                }}
                                style={{ mixBlendMode: "difference" }}
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
