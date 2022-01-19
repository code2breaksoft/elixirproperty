import { useCallback } from "react";
import { Col,Card, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './ServiceCard.css';

const ServiceCard = ({image,title,text,path}) => {
    const nav = useNavigate();
    const changePage = useCallback((path)=>{
        nav(path);
    },[]);
    return ( 
        <Col>
            <Card className="h-100" id="serviceCard">
                <Card.Img variant="top" src={image}  />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        text
                    }
                </Card.Text>
                        <Button onClick={()=>{changePage(path)}} variant="primary" className="serviceCard-btn">Know more</Button>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default ServiceCard;