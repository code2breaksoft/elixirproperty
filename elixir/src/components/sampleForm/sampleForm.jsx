import { useEffect, useState } from "react";
import { Form, Modal,Button,FormControl, Row, Col } from "react-bootstrap";
import data from '../../data/country.json';
import Select from 'react-select'

const SampleForm = ({show,handleClose,countrie}) => {
  const options = data.countries.map((item)=>(
    {value:item.code,label:item.name+" "+item.code}
  ))
  const download = async ()=>{
      window.location.href="/sample.pdf";
  }
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
                <Col lg={5} xs={5}>
                <Form.Label>Code</Form.Label>
                  <Select options={options} />

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
          <Button variant="primary" onClick={download}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
     );
}
 
export default SampleForm;