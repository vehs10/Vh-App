import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

  function NavBar() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Pokedex VH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar