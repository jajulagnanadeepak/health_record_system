import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert, Spinner, Button, Modal, Form } from 'react-bootstrap';

// 🚨 DEMO DOCTOR DATA (Fallback when API fails) 🚨
const DEMO_DOCTORS = [
    { id: 1, name: 'Dr. Jajula Deepak', specialization: 'Cardiology', email: 'john.s@klu.edu', phone: '9876543210' },
    { id: 2, name: 'Dr. Ashok Kumar', specialization: 'Neurology', email: 'jane.d@klu.edu', phone: '9988776655' }
];

export default function Doctors_Dashboard() {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  
  // State for selected doctor and appointment modal
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  // State for appointment form data
  const [appointmentData, setAppointmentData] = useState({
    patientName: '',
    date: '',
    time: '',
    issue: '',
  });

  // --- Utility Functions ---

  const handleShowAppointmentModal = (doc) => {
    setSelectedDoctor(doc);
    setShowAppointmentModal(true);
  };

  const handleCloseAppointmentModal = () => {
    setShowAppointmentModal(false);
    setSelectedDoctor(null);
    setAppointmentData({
      patientName: '',
      date: '',
      time: '',
      issue: '',
    });
  };

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
  };
  
  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    if (!selectedDoctor) return;

    // --- Backend Submission Simulation (Logs to console) ---
    console.log(`--- APPOINTMENT SUBMISSION LOG (Server Down) ---`);
    console.log(`Doctor: ${selectedDoctor.name}`);
    console.log(`Patient Name: ${appointmentData.patientName}`);
    console.log(`Date: ${appointmentData.date}`);
    console.log(`Time: ${appointmentData.time}`);
    console.log(`Issue: ${appointmentData.issue}`);
    console.log(`--- LOG COMPLETE ---`);

    alert(`Appointment Request for Dr. ${selectedDoctor.name} on ${appointmentData.date} at ${appointmentData.time} has been logged locally. Please check the console.`);
    handleCloseAppointmentModal();
  };


  // --- Data Fetching and Filtering ---

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      setApiError(null);
      try {
        const response = await axios.get('http://localhost:8080/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        
        // 🚨 FALLBACK LOGIC: Use demo data if API call fails 🚨
        setDoctors(DEMO_DOCTORS); 
        setApiError('Failed to connect to the backend server (http://localhost:8080). Displaying local DEMO DATA.');
        
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doc) => {
    const docName = doc.name?.toLowerCase() ?? '';
    const matchName = docName.includes(searchName.toLowerCase());
    
    const docSpec = doc.specialization ?? '';
    const matchSpec = selectedSpecialization
      ? docSpec === selectedSpecialization
      : true;
      
    return matchName && matchSpec;
  });

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  // --- Component Render ---

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className='text-primary fw-bold'>Doctor Management Dashboard</h2>
        
        <Button variant="danger" onClick={handleBackToDashboard}>
          <i className="bi bi-box-arrow-left me-1"></i> Back to Dashboard
        </Button>
      </div>

      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2 text-primary">Loading doctor records...</p>
        </div>
      )}

      {/* Show alert indicating demo data is being used */}
      {apiError && <Alert variant="warning">{apiError}</Alert>}

      {!loading && (
        <>
          {/* Filters */}
          <Row className="mb-4 g-3">
            <Col md={6}>
              <input
                type="text"
                placeholder="Search Doctor by Name"
                className="form-control"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <select
                className="form-control"
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
              >
                <option value="">Filter by Specialization</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Dermatology">Dermatology</option>
              </select>
            </Col>
          </Row>

          {/* Doctors List */}
          <Row className='g-4'>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doc) => (
                <Col
                  key={doc.id}
                  md={4}
                  lg={3}
                  onClick={() => handleShowAppointmentModal(doc)} 
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card h-100 p-3 shadow-sm border-start border-primary border-5 d-flex flex-column justify-content-between">
                    <div>
                        <h5 className='text-primary'>{doc.name ?? 'No Name'}</h5>
                        <p className="text-muted small mb-3">{doc.specialization ?? 'No Specialization'}</p>
                    </div>
                    {/* Visual Button for clarity on click action */}
                    <Button variant="outline-primary" size="sm" className='mt-2'>
                        Apply for Appointment
                    </Button>
                  </div>
                </Col>
              ))
            ) : (
              <Col xs={12}>
                <Alert variant="info" className="text-center">
                  No doctors found matching your criteria.
                </Alert>
              </Col>
            )}
          </Row>
        </>
      )}

      {/* Appointment Modal */}
      <Modal show={showAppointmentModal} onHide={handleCloseAppointmentModal}>
        <Modal.Header closeButton className='bg-primary text-white'>
          <Modal.Title>
            Book Appointment with Dr. {selectedDoctor?.name ?? 'N/A'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmitAppointment}>
          <Modal.Body>
            <Alert variant="warning">
              **Note:** The backend server is currently unavailable. This submission will be logged to your browser console for demonstration.
            </Alert>
            
            <Form.Group className="mb-3">
              <Form.Label>Your Name (Patient Name)</Form.Label>
              <Form.Control
                type="text"
                name="patientName"
                value={appointmentData.patientName}
                onChange={handleAppointmentChange}
                required
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={appointmentData.date}
                    onChange={handleAppointmentChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="time"
                    value={appointmentData.time}
                    onChange={handleAppointmentChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Issue/Reason for Visit</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="issue"
                value={appointmentData.issue}
                onChange={handleAppointmentChange}
                required
              />
            </Form.Group>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAppointmentModal}>
              Cancel
            </Button>
            <Button variant="success" type="submit">
              <i className="bi bi-calendar-check me-1"></i> Confirm Appointment
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}