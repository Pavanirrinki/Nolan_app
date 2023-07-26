import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assests/logo.webp";
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import Createscript from './Createscript';
function Header() {
 
  return (
    <div>
            <Navbar expand="lg" className='text-white margin-right z-index-5 bg-dark container-fluid m-0 p-0' fixed="top" >
        <Container>
          <Link to='/'>
          <Navbar.Brand href="#home"><img src={logo} className='m-0' /></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "white" }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>
            <Nav.Link href="/dashboard" className='text-white margin-right'>Dash Board</Nav.Link>
              <Nav.Link href="/about-us" className='text-white margin-right'>About Us</Nav.Link>
              <Nav.Link href="/loginandsignuppage" className='text-white margin-right'>Login</Nav.Link>
              <Nav.Link href="/pricing" className='text-white margin-right'>Pricing</Nav.Link>
              <div className='text-white margin-right mt-2' style={{cursor:"pointer"}}><Createscript data='Createscript'/></div>
              <Nav.Link href="/Blogs" className='text-white margin-right'>Blog</Nav.Link>
              <Nav.Link href="/profile" className='text-white margin-right'><CgProfile style={{fontSize:"25px"}}/></Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </div>
  )
}

export default Header
