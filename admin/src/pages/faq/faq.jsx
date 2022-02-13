import { Button, Col, Container, Row } from "react-bootstrap";

const Faq = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <h1>Faq</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button variant="primary">Add faq</Button>
                </Col>
                <Col lg={12}>
                    <Button variant="primary">Delete faq</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Faq;