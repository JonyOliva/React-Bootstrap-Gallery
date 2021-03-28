import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import {Link} from "react-router-dom"

class CNavBar extends Component {

    render() {
        return (
            <Navbar bg="light" expand="sm" variant="light" fixed="top" collapseOnSelect className="shadow">
                <Navbar.Brand href="#home" className="">Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar" />
                
                <Navbar.Collapse id="responsive-navbar" className="justify-content-end app-nav">
                    <Nav className="mt-auto p-2 nav-main" >
                        <Nav.Link as={Link} eventKey="0" to="/">HOME </Nav.Link>
                        <Nav.Link as={Link} eventKey="2" to="/Gallery">GALLERY </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CNavBar;