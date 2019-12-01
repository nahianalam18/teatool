
import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import firebase from "firebase";
import styled from 'styled-components';const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Welcome, {firebase.auth().currentUser.displayName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Item><Nav.Link href="/background">Background</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/enrolled">Enrolled</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  </Styles>
)