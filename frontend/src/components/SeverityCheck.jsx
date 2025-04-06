import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner, Alert, Modal } from 'react-bootstrap';
import axios from 'axios';

const SeverityCheck = () => {
  const labels = [
    'Dacoity', 'Robbery', 'Murder', 'Speedy Trial', 'Riot', 'Woman & Child Repression', 
    'Kidnapping', 'Police Assault', 'Burglary', 'Theft', 'Other Cases', 'Arms Act', 
    'Explosive', 'Narcotics', 'Smuggling', 'Other Crimes'
  ];

  const [inputs, setInputs] = useState(Array(16).fill(''));
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    // Validate inputs
    if (inputs.some(input => input === '' || isNaN(input))) {
      setError('Please fill all fields with valid numbers.');
      return;
    }

    const formattedData = { data: [inputs.map(Number)] };

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5001/predict', formattedData);
      const prediction = response.data.predictions[0]; // Extract "Low" or other result
      setResult(prediction);
      setShowModal(true); // Open the modal with result
    } catch (err) {
      setError('Failed to fetch data from API.');
    } finally {
      setLoading(false);
    }
  };

  // Close the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-center">Severity Check</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          {inputs.map((input, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-3">
              <Form.Group controlId={`input-${index}`}>
                <Form.Label className="fw-bold text-start w-100">
                  {labels[index]}
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder={`Enter ${labels[index]}`}
                  value={input}
                  onChange={(e) => handleChange(index, e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Checking...
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </div>
      </Form>

      {error && <Alert variant="danger" className="mt-4 text-center">{error}</Alert>}

      {/* Modal to show result */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crime Severity Prediction Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Prediction:</strong> {result}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SeverityCheck;
