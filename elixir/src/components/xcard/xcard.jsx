import { Col, Container,Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./xcard.css";

const XCard = ({title,text,image}) => {
    return ( 
            <Card className="xcard">
                <Card.Header as="h5" className="xcard-title">{title}</Card.Header>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col lg={3} xs={12}>
                                <img src={image} className="xcard-image"/>
                            </Col>
                            <Col lg={9} xs={12} className="xcard-text">
                                {text}
                                <div className="xcard-divider"></div>

                            </Col>
                            <Row>
                                <Col>

                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
     );
}
 
export default XCard;