import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Container, Row, Col, Button, Card, Alert } from 'react-bootstrap'; // Import Bootstrap components

const ViewRecordsPage = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setLoading(true);
    setApiError(null);
    try {
      const response = await axios.get('http://localhost:8080/api/patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
      setApiError('Failed to fetch patient data. Check the backend server connection.');
    } finally {
        setLoading(false);
    }
  };

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Navigate to the dashboard route
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary fw-bold">Patient Records</h2>
        {/* 🚨 ADDED BACK BUTTON 🚨 */}
        <Button variant="danger" onClick={handleBackToDashboard}>
                  <i className="bi bi-box-arrow-left me-1"></i> Back to Dashboard
                </Button>
      </div>
      
      {loading && <Alert variant="info" className="text-center">Loading patient list...</Alert>}
      {apiError && <Alert variant="danger">{apiError}</Alert>}

      {!loading && !apiError && (
        <Row>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <Col md={4} mb={3} key={patient.id}>
                <Card
                  className="p-3 shadow-sm h-100 border-start border-success border-5"
                  onClick={() => handleSelectPatient(patient)}
                  style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                >
                  <Card.Title className='text-success'>{patient.name}</Card.Title>
                  <Card.Text>
                    <strong>Age:</strong> {patient.age}<br/>
                    <strong>Email:</strong> {patient.email}
                  </Card.Text>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12}><Alert variant="warning" className="text-center">No patient records found.</Alert></Col>
          )}
        </Row>
      )}

      {selectedPatient && (
        <Card className="mt-5 p-4 shadow bg-light border-0">
          <Card.Title className='text-secondary fw-bold'>Selected Patient Details</Card.Title>
          <Row>
            <Col md={6}>
                <p><strong>Name:</strong> {selectedPatient.name}</p>
                <p><strong>Age:</strong> {selectedPatient.age ?? 'N/A'}</p>
                <p><strong>Gender:</strong> {selectedPatient.gender ?? 'N/A'}</p>
                <p><strong>Email:</strong> {selectedPatient.email ?? 'N/A'}</p>
                <p><strong>Phone:</strong> {selectedPatient.phone ?? 'N/A'}</p>
                <p><strong>Health Issue:</strong> {selectedPatient.healthIssue ?? 'N/A'}</p>
            </Col>
            <Col md={6}>
                <p><strong>Blood Pressure:</strong> {selectedPatient.bp ?? 'N/A'}</p>
                <p><strong>Hemoglobin:</strong> {selectedPatient.hemoglobin ?? 'N/A'}</p>
                <p><strong>Platelets:</strong> {selectedPatient.platelets ?? 'N/A'}</p>
                <p><strong>Lymphocytes:</strong> {selectedPatient.lymphocytes ?? 'N/A'}</p>
                <p><strong>SGOT:</strong> {selectedPatient.sgot ?? 'N/A'}</p>
                <p><strong>SGPT:</strong> {selectedPatient.sgpt ?? 'N/A'}</p>
            </Col>
          </Row>
          
        </Card>
      )}
    </Container>
  );
};

export default ViewRecordsPage;