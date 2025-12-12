import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; 

export default function Dashboard() {
  const navigate = useNavigate();

  const handleDoctorClick = () => navigate('/Doctors');
  const handlePatientClick = () => navigate('/Patients');
  const handleGoHome = () => navigate('/'); 

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/abstract-molecules-background-with-medical-icons_1017-27083.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="d-flex flex-column h-100 flex-grow-1"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
      >
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-3 shadow-lg">
          
          <span className="navbar-brand fw-bolder fs-3 text-white">
            <i className="bi bi-heart-pulse fs-4 me-2"></i> HEALTH RECORD SYSTEM
          </span>

          <div className="ms-auto d-flex align-items-center">
            
            <span className="text-white me-4 fw-medium d-none d-sm-inline">
              <i className="bi bi-speedometer2 fs-4 me-1"></i> Dashboard
            </span>
            
            <button
              className="btn btn-outline-light fw-bold me-3" 
              onClick={handleGoHome}
            >
              <i className="bi bi-house-door-fill fs-5 me-1"></i> Back to Home
            </button>
            
            <span className="text-white fs-2 me-2" role="img" aria-label="hospital-logo">
              🏥 
            </span>

          </div>
        </nav>

        <Container className="py-5 flex-grow-1">
          <header className="text-center mb-5">
            <h1
              className="display-4 fw-bolder text-primary"
              style={{ letterSpacing: '2px' }}
            >
              Welcome to the KLU MED Dashboard
            </h1>
            <p className="lead text-secondary mt-3">
              Manage Doctor and Patient Records efficiently.
            </p>
          </header>

          {/* 🚨 BOX SIZE FIX: Use d-flex and align-items-stretch on the ROW to ensure columns/cards are equal height 🚨 */}
          <div className="row justify-content-center g-5 pt-4 d-flex align-items-stretch"> 
            
            {/* Doctor Card */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                onClick={handleDoctorClick}
                // 🚨 Added h-100 🚨
                className="card p-4 text-center border-0 shadow-lg modern-card h-100" 
                style={{ cursor: 'pointer' }}
              >
                {/* Reverting size to original, clean structure. If emojis need size adjustment, use fs-1 on the span */}
                <div className="mb-3">
                  <span role="img" aria-label="doctor-icon" className='fs-1'>
                    👨‍⚕️
                  </span>
                </div>
                <h3 className="card-title text-primary fw-bold">Doctor Management</h3>
                <p className="card-text text-muted mb-0">
                  Access, add, and update all doctor records.
                </p>
                <small className="text-primary mt-2">Click to view records →</small>
              </div>
            </div>

            {/* Patient Card */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                onClick={handlePatientClick}
                // 🚨 Added h-100 🚨
                className="card p-4 text-center border-0 shadow-lg modern-card h-100"
                style={{ cursor: 'pointer' }}
              >
                <div className="mb-3">
                  <span role="img" aria-label="patient-icon" className='fs-1'>
                    🧑‍💼
                  </span>
                </div>
                <h3 className="card-title text-success fw-bold">Patient Management</h3>
                <p className="card-text text-muted mb-0">
                  View and manage all patient records and histories.
                </p>
                <small className="text-success mt-2">Click to view records →</small>
              </div>
            </div>
          </div>
        </Container>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4 mt-auto border-top border-primary-dark">
          <Container>
            <div className="d-flex justify-content-center flex-wrap gap-4 mb-3">
              <div className="fw-medium">
                <i className="bi bi-telephone-fill fs-5 me-1"></i> Support:{' '}
                <a href="tel:+919997776661" className="text-decoration-none text-white-50">
                  +91-9997776661
                </a>
              </div>
              <div className="fw-medium">
                <i className="bi bi-geo-alt-fill fs-5 me-1"></i> City:{' '}
                <span className="text-white-50">
                  Hyderabad
                </span>
              </div>
            </div>
            <p className="mb-0 text-white-50">
              © 2025 Health Record System. All rights reserved.
            </p>
          </Container>
        </footer>
      </div>
    </div>
  );
}