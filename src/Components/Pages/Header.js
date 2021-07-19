import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
        <div style={{position: 'relative', justifySelf: 'center'}}>
            <Navbar activeKey="/home" collapseOnSelect expand="lg" fixed="top" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto justify-content-center">
                        <Nav.Link href='#Home'>Home</Nav.Link>
                        <Nav.Link href='#About'>About</Nav.Link>
                        <Nav.Link href='#Resume'>Resume</Nav.Link>
                        <Nav.Link href='#Projects'>Projects</Nav.Link>
                        <Nav.Link href='#Interests'>Interests</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
 
    );
  }
}
