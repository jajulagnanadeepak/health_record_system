import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const navigate = useNavigate();

  const backgroundStyle = {
    // Medical/DNA theme image remains
    backgroundImage: "url('https://img.freepik.com/free-vector/dna-structure-with-medical-icons-background_1017-10499.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle} className="d-flex flex-column">
      
      {/* 🛑 REMOVED: Light Overlay div and styles */}

      {/* Navbar (Set to dark text/transparent for visibility) */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 py-3"> {/* Changed back to navbar-dark */}
            <Container>
                {/* Text color set to white/warning for contrast */}
                <span className="navbar-brand fw-bolder fs-4 text-warning">
                    <i className="bi bi-heart-pulse me-2 text-warning"></i> Health Record System
                </span>
                <div className="ms-auto">
                    <Button variant="outline-warning" className="me-2" onClick={() => navigate('/')}>Home</Button>
                    <Button variant="outline-info" className="me-2" onClick={() => navigate('/login')}>Login</Button>
                    <Button variant="outline-warning" onClick={() => navigate('/about')}>About</Button>
                </div>
            </Container>
        </nav>
      </div>

      {/* Main Content Area (Hero + Features Combined) */}
      <div
        className="flex-grow-1 d-flex align-items-center py-5" 
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Container text is white now */}
        <Container className="text-white">
          
          {/* Main Title and CTA */}
          <Row className="justify-content-center text-center mb-5">
            <Col md={10}>
              {/* Title color set to warning/white for contrast */}
              <h1 className="mb-3 fw-bolder display-4 text-warning"> 
                KLU MED - Health Record System
              </h1>
              {/* Description is white */}
              <p className="lead mb-4 text-white"> 
                Securely manage, track, and access patient health records in a seamless, efficient, and compliant digital environment.
              </p>
              
              {/* Action Buttons */}
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <Button
                  variant="info" 
                  size="lg"
                  className="px-5 py-3 fw-bold shadow-lg"
                  onClick={() => navigate('/login')}
                >
                  <i className="bi bi-file-earmark-lock-fill me-2"></i> Access Records
                </Button>
                <Button
                  variant="outline-warning" 
                  size="lg"
                  className="px-5 py-3 fw-bold shadow-lg"
                  onClick={() => navigate('/about')}
                >
                  <i className="bi bi-info-circle-fill me-2"></i> Learn More
                </Button>
              </div>
            </Col>
          </Row>

          {/* Feature Cards Section */}
          <Row className="justify-content-center g-4 mt-5">
            <h2 className="text-center text-white fw-bold mb-4">Our Core Services</h2>

            {/* Hospitality Card - Keeping light background for the card itself for clarity */}
            <Col xs={12} md={5} lg={4}>
              <Card 
                className="text-center p-3 h-100 border-0 shadow-lg"
                style={{ cursor: 'pointer', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                onClick={() => navigate('/login')}
              >
                <Card.Body>
                  <div className="display-4 mb-2 text-primary">🛏️</div>
                  <Card.Title className="fw-bold text-primary">Hospitality Services</Card.Title>
                  <Card.Text className="text-muted small">
                    Clinical excellence must be the priority for any health care service provider.
                  </Card.Text>
                  <Button variant="primary" size="sm" className="fw-bold mt-3">
                    Apply For A Bed
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Chamber Service Card */}
            <Col xs={12} md={5} lg={4}>
              <Card 
                className="text-center p-3 h-100 border-0 shadow-lg"
                style={{ cursor: 'pointer', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                onClick={() => navigate('/login')}
              >
                <Card.Body>
                  <div className="display-4 mb-2 text-success">🏥</div>
                  <Card.Title className="fw-bold text-success">Chamber Service</Card.Title>
                  <Card.Text className="text-muted small">
                    Providing specialized care and appointments for your health needs.
                  </Card.Text>
                  <Button variant="success" size="sm" className="fw-bold mt-3">
                    Make An Appointment
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer (Kept dark for strong contrast) */}
      <footer
        className="bg-dark text-white text-center py-4"
        style={{ zIndex: 2, position: 'relative' }}
      >
        <Container>
          <p className="mb-1 small">
            <i className="bi bi-telephone-fill me-1"></i> Support Contacts: +91-9997776661
          </p>
          <p className="mb-1 small">
            <i className="bi bi-geo-alt-fill me-1"></i> City: Hyderabad
          </p>
          <p className="mb-0 small text-white-50">
            © 2025 Health Record System. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}