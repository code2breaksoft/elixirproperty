import { Button, Col, Container, Row } from "react-bootstrap";

const Blog = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <h1>Blog</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button variant="primary">Add blog</Button>
                </Col>
                <Col lg={12}>
                    <Button variant="primary">Delete blog</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Blog;