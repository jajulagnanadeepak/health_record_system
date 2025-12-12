import { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Forget_Password() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    setError('');
    console.log(`Sending password reset link to: ${email}`);
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/medical-healthcare-blue-color_1017-26807.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '5rem',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h3 className="text-center mb-4 text-dark">Reset Your Password</h3>

            {submitted && (
              <Alert variant="success">
                If this email exists in our system, a password reset link has been sent.
              </Alert>
            )}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
              <Form.Group className="mb-3" controlId="resetEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Send Reset Link
              </Button>

              <div className="d-flex justify-content-end">
                <Button variant="secondary" size="sm" onClick={() => navigate('/login')}>
                  ← Back to Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
