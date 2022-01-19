import { useCallback } from "react";
import { Col,Card, Button, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './ServiceCardMod.css';
const ServiceCardMod = ({image,title,text,path}) => {
    const nav = useNavigate();
    const changePage = useCallback((path)=>{
        nav(path);
    },[]);
    return ( 
        <Col lg={12} style={{marginBottom:"3rem"}}>
        <Card className="h-100" id="serviceCard">
            <Container fluid className="service-container">
                <Row>
                    <Col>
                        <Card.Img variant="top" src={image} className="servicecard-image" />
                    </Col>
                    <Col>
                    <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {
                    text
                }
            </Card.Text>
            <Button onClick={()=>{changePage(path)}} variant="primary" className="serviceCard-btn">Know more</Button>
            </Card.Body>
                    </Col>
                </Row>

            </Container>
        </Card>
    </Col>
     );
}
 
export default ServiceCardMod;