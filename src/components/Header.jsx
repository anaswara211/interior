import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal, FloatingLabel, Form } from 'react-bootstrap';

const Header = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = () => {
    if (email && password) {
      alert("Login Successful");
      handleClose();  // Close the modal after successful login
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <Navbar expand="lg" className="text-light" style={{backgroundColor:'darkgreen'}}>
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold fs-3">IKEA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#home" className="text-white fw-bold me-3">Home</Nav.Link>
            <Nav.Link href="#services" className="text-white fw-bold me-3">Services</Nav.Link>
            <Nav.Link href="#products" className="text-white fw-bold me-3">Products</Nav.Link>

            <Button onClick={handleShow} variant="outline-light" className="ms-2 fw-bold">Login</Button>

            <Modal
  show={show}
  onHide={handleClose}
  style={{ backdropFilter: 'blur(5px)' }} // Optional: adds a blur effect to the backdrop
>
  <Modal.Header
    closeButton
    style={{
      backgroundColor: 'transparent', // Make the header transparent
      border: 'none',
    }}
  >
    <div className="w-100 text-center">
      <Modal.Title className="fw-bold">Login</Modal.Title>
    </div>
  </Modal.Header>
  <Modal.Body
    style={{
      backgroundColor: 'transparent', // Make the body transparent
      color: '#000', // Text color
    }}
  >
    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
      <Form.Control 
        type="email" 
        placeholder="name@example.com" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ backgroundColor: 'transparent', border: '1px solid #ccc' }} // Make input transparent with border
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPassword" label="Password">
      <Form.Control 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ backgroundColor: 'transparent', border: '1px solid #ccc' }} // Make input transparent with border
      />
    </FloatingLabel>

    {/* Remember me and Forgot password */}
    <div className="d-flex justify-content-between align-items-center mt-3">
      <Form.Check type="checkbox" label="Remember me" />
      <a href="#" className="text-decoration-none">Forgot password?</a>
    </div>
  </Modal.Body>
  <Modal.Footer
    style={{
      backgroundColor: 'transparent', // Make the footer transparent
      border: 'none',
    }}
  >
    <Button className="w-100" variant="info" size="lg" onClick={handleLogin}>
      Login
    </Button>

    {/* Register Link */}
    <div className="text-center mt-3">
      <p>Don't have an account? <a href="#" className="text-decoration-none">Register</a></p>
    </div>
  </Modal.Footer>
</Modal>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
