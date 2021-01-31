import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
class Bar extends React.Component {
    render() {
        return <div>
            <Navbar collapseOnSelect expand="lg" style={{color: 'white', backgroundColor: 'black'}} variant="dark">
            <Navbar.Brand href="#home">VaccineTrust</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Link className="nav-link" to="/">Resources</Link>
                <Link className="nav-link" to="/">FAQs</Link>
                </Nav>
                <Nav className="ml-auto">
                <Link className="nav-link" to="/">Login</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    }
}

export default Bar;