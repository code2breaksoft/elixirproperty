import { Button, Col, Row } from "react-bootstrap";
import "./sample.css";
const Sample = () => {
    return ( 
        <Row className="sample">
            <h2>Sample report</h2>
            <Col>
                <p>Look into our sample snagging and inspection report&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" size="lg">Download now</Button></p>
            </Col>
        </Row>
     );
}
 
export default Sample;