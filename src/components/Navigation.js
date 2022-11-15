import { useState, useEffect } from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import navIcon1 from '../assets/github.svg';
import navIcon2 from '../assets/linkedin.svg';


export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <div className="navigation">
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
          <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          <Nav.Link className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="github-logo" /></a>
              <a href="#"><img src={navIcon2} alt="linkedin-logo" /></a>
              </div>
              <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
  )
}

export default Navigation