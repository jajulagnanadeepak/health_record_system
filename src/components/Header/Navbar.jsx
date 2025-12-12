import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional custom styling

export default function AppNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-primary">
          🏥 Health Record System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link-custom">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="nav-link-custom">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              About
            </Nav.Link> {/* ✅ Added About link */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
