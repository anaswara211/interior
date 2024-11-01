import React, { useState } from 'react';
import './Home.css';
import backgroundImage from '../assets/bgi.png'; // Adjust path if needed
import { Modal, Button } from 'react-bootstrap';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="home-container">
      {/* Background Image */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Content Section */}
      <div className="content">
        <h1>This is where the magic happens</h1>
        <p>This is where the magic happens</p>
        <div className="button-group">
          <button className="btn btn-secondary">Interior Works</button>
          <button onClick={handleShow} className="btn btn-secondary">
            Watch Demo &#9654;
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal size="lg" show={show} onHide={handleClose} style={{ backdropFilter: 'blur(5px)'}}>
        <Modal.Header closeButton>
          <Modal.Title>Interior Work</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="395" src="https://www.youtube.com/embed/G5RzAuAoPjU" title="Small Bedroom Storage Solutions  - IKEA Home Tour" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
