import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';

export const scrollOpts = {
    smooth: true, 
    durationduration: 1000,
    offset: -200
}

export default class Header extends Component {
  render() {
    return (
        <div style={{position: 'relative', justifySelf: 'center'}}>
            <Navbar activekey="/home" collapseOnSelect expand="lg" fixed="top" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto justify-content-center">
                        <Nav.Link onClick={() => {scroller.scrollTo('Home', scrollOpts)}}>Home</Nav.Link>
                        <Nav.Link onClick={() => {scroller.scrollTo('About', scrollOpts)}}>About</Nav.Link>
                        <Nav.Link onClick={() => {scroller.scrollTo('Resume', scrollOpts)}}>Resume</Nav.Link>
                        <Nav.Link onClick={() => {scroller.scrollTo('Projects', scrollOpts)}}>Projects</Nav.Link>
                        <Nav.Link onClick={() => {scroller.scrollTo('Interests', scrollOpts)}}>Interests</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
 
    );
  }
}
