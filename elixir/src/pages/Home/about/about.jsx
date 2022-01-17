import { Col, Row,Form,Button } from "react-bootstrap";

const About = () => {
    return ( 
        <Row>
            <Col lg={6} xs={12}>
                <h2>About us</h2>
                <p>Our Professional Snagging Surveyors have an excellent insight into the mindset of developers. We have the in-depth knowledge and experience gained from over 15 years in the construction / property industry.</p>
                <Row>
                    <Col>
                        <h2>100%</h2>
                        <h6>Client satisfaction</h6>
                    </Col>
                    <Col>
                        <h2>2,200</h2>
                        <h6>Properties snagged</h6>
                    </Col>
                </Row>
            </Col>
            <Col lg={6} xs={12}>
                <Form>
                    <h2>Get in touch with us</h2>
                    <p>Learn More About Inspection & Snagging Today!</p>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="tel" placeholder="Enter phone" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" placeholder="Enter phone" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
     );
}
 
export default About;