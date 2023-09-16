import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.css';

const Header = ()=> {
    return (
        <Navbar expand="md" className="navbar">
            <Container>
                <Navbar.Brand href="#home" className='navbar-logo d-flex'>
                    <h2>LV</h2>
                    <div className='d-flex justify-content-center flex-column'>
                        <p>Luciana</p>
                        <p>Vanelli</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='navbar-links'>
                    <Nav className="me-auto">
                        <Nav.Link href="#skills" className='navbar-link'>Skills</Nav.Link>
                        <Nav.Link href="#experience" className='navbar-link'>Experience</Nav.Link>
                        <Nav.Link href="#projects" className='navbar-link'>Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header