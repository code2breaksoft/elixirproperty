import { useEffect, useState } from "react";
import { Form, Modal,Button,FormControl, Row, Col } from "react-bootstrap";
import data from '../../data/country.json';

const FormModal = ({show,handleClose,countrie}) => {
    return ( 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register your interest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
                <Col lg={4} xs={4}>
                <Form.Label>Code</Form.Label>
                <Form.Select title="code">
                  {
                    data.countries.map((item)=>(
                      <option value={item.code}>{item.code}  &nbsp;          {item.name}</option>
                    ))
                  }
                  </Form.Select>

                </Col>
                <Col>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone number" />
                </Col>
            </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Property details</Form.Label>
                <FormControl as="textarea" placeholder="Enter your property details" />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
     );
}
 
export default FormModal;