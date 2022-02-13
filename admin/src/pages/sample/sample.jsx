import { Container, Row,Col,Form, Button } from "react-bootstrap";

const Sample = () => {
    return ( 
        <Container fluid>
            <Row>
            <Col lg={12}>
                    <h3>Sample Report</h3>
                </Col>
                <Col lg={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="file" placeholder="update sample report" />
                </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary">Update sample report</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Sample;