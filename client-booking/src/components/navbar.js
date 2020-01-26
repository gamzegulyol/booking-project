import React from 'react';
import {Navbar,Button, Form,FormControl,Nav } from "react-bootstrap";

const NavBar = () => (
<Navbar bg="dark" variant="dark">
    <Navbar.Brand>Booking.com</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Anasayfa</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Ara</Button>
    </Form>
  </Navbar>
);

export default NavBar;