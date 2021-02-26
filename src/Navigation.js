import React from 'react'
import { Navbar, Form, Button, Nav, FormControl } from "react-bootstrap";


export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">yummy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/sellerup">Partners</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Find Food 😋"
              className="mr-sm-2"
            />
            &nbsp;
            <Button variant="outline-primary">Log In</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    
    )
}
