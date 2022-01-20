import { Card, Col,Row } from "react-bootstrap";
import "./tools.css";
const ToolCard = ({text,image}) => {
    return ( 
        <Col xs={6} lg={3}  className="toolCard-col">
            <Card className="tools">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Text style={{textAlign:"center"}}>
                {
                    text
                }
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
     );
}
 

const Tools = () => {
    return ( 
        <>
            <section id="tools">
            <Row>
            <h2>Tools used</h2>
            <p>We apply latest techniques and updated tools for property snagging to know each and every detail.</p>
        </Row>
        <Row xs={5} md={4} className="g-4">
            <ToolCard image="/images/tools/1.jpg" text="Voltage detector"/>
            <ToolCard image="/images/tools/2.jpg" text="Socket tester"/>
            <ToolCard image="/images/tools/3.jpg" text="Anemometer"/>
            <ToolCard image="/images/tools/4.jpg" text="Sound meter"/>
            <ToolCard image="/images/tools/5.jpg" text="Humidity meter"/>
            <ToolCard image="/images/tools/6.jpg" text="Gas Leak detector"/>
            <ToolCard image="/images/tools/7.jpg" text="Tile tapping rod"/>
            <ToolCard image="/images/tools/8.jpg" text="Spirit level"/>
            <ToolCard image="/images/tools/9.jpg" text="Moisture meter"/>
            <ToolCard image="/images/tools/10.jpg" text="Infrared thermometer"/>
            <ToolCard image="/images/tools/11.jpg" text="Thermal camera"/>
            <ToolCard image="/images/tools/12.jpg" text="Endoscope camera"/>
        </Row>
            </section>
        </>
     );
}
 
export default Tools;