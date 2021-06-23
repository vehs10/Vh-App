
import React from 'react'

import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

  function NavBar() {
    return (
     
  <Router>
    <div>
      <Navbar bg="dark" className="fixed-top" variant="dark" expand="lg">
      <Navbar.Brand href="#home">PokeShop VH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
          <Nav.Link as={Link} to={"/About"}>About Us</Nav.Link>
          <Nav.Link as={Link} to={"/Contact"}>Contact Us</Nav.Link>
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
   </div>
   <div>
     <Switch>
       <Route path="/About">
         <About />

       </Route>
       <Route path="/Contact">
         <Contact />
       </Route>

     </Switch>
   </div>
 </Router>
    
    
    )
}

export default NavBar