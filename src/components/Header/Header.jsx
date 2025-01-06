import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import Netflix_logo from "../../assets/netflix_logo.png";
// import { styled } from '@mui/material/styles'; // Correct
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-teritery" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><img className='header_logo' src={Netflix_logo} alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#tv_show">TV Shows</Nav.Link>
          <Nav.Link href="#movie">Movies</Nav.Link>
          <Nav.Link href="#latest">Latest</Nav.Link>
          <Nav.Link href="#my_list">My List</Nav.Link>
          <Nav.Link href="#language">Browse By language</Nav.Link>
          
        </Nav>
        <Nav className='right_side_nav'>
          <Nav.Link href="#deets"><SearchIcon/></Nav.Link>
          <Nav.Link eventKey={2} href="#memes"><NotificationsNoneIcon/></Nav.Link>
          <Nav.Link eventKey={2} href="#memes"><PermIdentityOutlinedIcon/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
  
}

export default Header