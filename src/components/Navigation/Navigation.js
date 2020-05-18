import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

export default function Navigation() {
    return (
<Navbar bg="dark" expand="lg" className="text-light mb-0 fixed-top">
  <Navbar.Brand href="#home" className='text-light'>Movies</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" className='text-light'>Movies</Nav.Link>
      <Nav.Link href="#" className='text-light'>Favorites</Nav.Link>
      <Nav.Link href="#" className='text-light'>Account</Nav.Link>
      <Nav.Link href="#" className='text-light'>Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
