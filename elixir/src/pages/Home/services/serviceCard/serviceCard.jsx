import { Col,Card, Button } from "react-bootstrap";
import './ServiceCard.css';

const ServiceCard = ({image,title,text}) => {
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
                <Button variant="primary" classNae="serviceCard-btn">Know more</Button>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default ServiceCard;