import React from 'react';
import { Navbar,Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import '../css/bootstrap.min.css'
const Navigation = () => {

    return (
        <div className="col-md-12">
            <>

   <Navbar bg="primary" variant="dark" >
    <Navbar.Brand href="#home">Online Courses</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Courses">Courses</Nav.Link>
      <Nav.Link href="#Trending">Trending</Nav.Link>
    </Nav>
  </Navbar>

  <br />

</>

        </div>
    );
};

export default Navigation;