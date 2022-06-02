import Head from 'next/head'
import { useState } from 'react'
import { Navbar, Container, } from 'react-bootstrap'
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
const HeaderContainer = {
  zIndex: 1030,
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  marginTop: "0.0rem",
  backgroundColor: "#0099FF",
};
const HeaderLogo = {
  fontSize: "1.68rem",
  color: "#fff",
  textDecoration: "none",
  padding: 1,
  margin: 1,

}
const HeaderLinks = {
  fontSize: "3.18rem",
  color: "#fff",
  textDecoration: "none",
  padding: 1,
  margin: 1,
};
export function NavBarPaths() {
  return (
    <>
      <Navbar expand="lg" style={HeaderContainer} >
        <Container fluid>
          <Navbar.Brand href="#home" style={HeaderLogo} >MicrometreUK</Navbar.Brand>
          <Navbar.Brand href="#home">
            <FaGithub style={HeaderLinks} />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <FaLinkedin style={HeaderLinks} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarPaths;