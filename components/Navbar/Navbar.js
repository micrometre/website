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
      <Navbar expand="lg" bg="primary" variant="dark" style={HeaderContainer} >
        <Container fluid>
          <Navbar.Brand  title="MicrometreUK Logo"  href="/" style={HeaderLogo} >MicrometreUK</Navbar.Brand>
          <Navbar.Brand  title= "MicrometreUK on Github"  href="https://github.com/micrometreuk" target="_blank"rel="noreferrer">
            <FaGithub style={HeaderLinks} />
          </Navbar.Brand>
          <Navbar.Brand  title= "Micrometre on Linkedin"  href="/" target="_blank"rel="noreferrer">
            <FaLinkedin style={HeaderLinks} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarPaths;