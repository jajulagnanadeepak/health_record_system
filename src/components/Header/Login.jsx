import { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);

    // Simulate login
    setTimeout(() => {
      console.log('Logging in with:', form);
      alert('Login successful (mock)');
      setForm({ email: '', password: '' });
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
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
            <h3 className="text-center mb-4 text-dark">Login to Health Record System</h3>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-end mb-3">
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => navigate('/forgot-password')}
                >
                  Forgot Password?
                </Button>
              </div>

              <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </Button>

              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={() => navigate('/')}
                  size="sm"
                >
                  ← Back
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
