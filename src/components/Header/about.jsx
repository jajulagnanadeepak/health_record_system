import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: "url('https://your-image-url.com/medical-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        color: '#fff',
      }}
    >
      <Container className="bg-dark bg-opacity-75 rounded p-4 position-relative">
        {/* Back to Home Button */}
        <Button
          variant="light"
          className="position-absolute top-0 end-0 m-3"
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>

        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="mb-4">About Health Record System</h2>
            <p className="lead">
              The Health Record System is designed to efficiently store, manage, and track patient health data. 
              It allows healthcare providers to securely access patient records, manage medical history, and streamline healthcare delivery.
            </p>

            <Row className="mt-4">
              <Col sm={12} md={4}>
                <Card className="shadow-sm mb-4">
                  <Card.Body>
                    <Card.Title>Secure Data Storage</Card.Title>
                    <Card.Text>
                      Our system ensures that all patient data is securely stored and encrypted, with access only granted to authorized personnel.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4}>
                <Card className="shadow-sm mb-4">
                  <Card.Body>
                    <Card.Title>Real-Time Access</Card.Title>
                    <Card.Text>
                      Healthcare providers can instantly access patient health records, enabling timely decision-making and improving patient care.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4}>
                <Card className="shadow-sm mb-4">
                  <Card.Body>
                    <Card.Title>Appointment Management</Card.Title>
                    <Card.Text>
                      Our system allows for efficient scheduling and management of patient appointments, reducing wait times and improving efficiency.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <h4 className="mt-5">Why Choose Our System?</h4>
            <ul className="list-unstyled">
              <li>Enhance patient data security and privacy</li>
              <li>Reduce administrative workload through automated processes</li>
              <li>Improve overall patient care with a centralized system</li>
              <li>Integrate seamlessly with other healthcare technologies</li>
            </ul>
          </Col>
        </Row>

        <footer className="mt-5 pt-4 border-top text-center small" style={{ color: '#000' }}>
          <div>Support Contacts: +91-9876543210 &nbsp; | &nbsp; +91-9123456789 &nbsp; | &nbsp; +91-9090909090</div>
          <div>Cities Covered: Mumbai &nbsp; | &nbsp; Delhi &nbsp; | &nbsp; Bengaluru &nbsp; | &nbsp; Hyderabad &nbsp; | &nbsp; Pune</div>
          <div className="mt-2">© 2025 Health Record System. All rights reserved.</div>
        </footer>
      </Container>
    </div>
  );
}
