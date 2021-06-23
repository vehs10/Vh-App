
import React from 'react'
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap'



  function NavBar(props) {
    return (
      <Navbar bg="dark" className="fixed-top" variant="dark" expand="lg">
      <Navbar.Brand href="#home">PokeShop VH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={props.Link} to={"/"} >Home</Nav.Link>
          <Nav.Link as={props.Link} to={"/About"}>About Us</Nav.Link>
          <Nav.Link as={props.Link} to={"/Contact"}>Contact Us</Nav.Link>
          
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