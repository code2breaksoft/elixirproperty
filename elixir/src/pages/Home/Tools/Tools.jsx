import { Card, Col,Row } from "react-bootstrap";
import "./tools.css";
import i1 from '../../../images/tools/1.jpg';
import i2 from '../../../images/tools/2.jpg';
import i3 from '../../../images/tools/3.jpg';
import i4 from '../../../images/tools/4.jpg';
import i5 from '../../../images/tools/5.jpg';
import i6 from '../../../images/tools/6.jpg';
import i7 from '../../../images/tools/7.jpg';
import i8 from '../../../images/tools/8.jpg';
import i9 from '../../../images/tools/9.jpg';
import i10 from '../../../images/tools/10.jpg';
import i11 from '../../../images/tools/11.jpg';
import i12 from '../../../images/tools/12.jpg';
const ToolCard = ({text,image,alt}) => {
    return ( 
        <Col xs={6} lg={3}  className="toolCard-col">
            <Card className="tools">
                <Card.Img variant="top" src={image} alt={alt}/>
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
            <h2>Tools Utilized</h2>
            <p>We apply latest techniques and updated tools for property snagging to know each and every detail.</p>
        </Row>
        <Row xs={5} md={4} className="g-4">
        <ToolCard image={i9} text="Moisture meter" alt={"Moisture meter"}/>
            <ToolCard image={i10} alt={"Infrared Thermometer"}  text="Infrared thermometer"/>
            <ToolCard image={i11} alt={"Thermal Camera"} text="Thermal camera"/>
            <ToolCard image={i12} alt={"Endoscope Camera"} text="Endoscope camera"/>
            
            <ToolCard image={i1} alt={"Voltage Detector"} text="Voltage detector"/>
            <ToolCard image={i2} alt={"Socket Tester"} text="Socket tester"/>
            <ToolCard image={i3} alt={"Anemometer"} text="Anemometer"/>
            <ToolCard image={i4}  alt={"Sound Meter"} text="Sound meter"/>
            <ToolCard image={i5} alt={"Humidity Meter"} text="Humidity meter"/>
            <ToolCard image={i6} alt={"Gas Leak Detector"} text="Gas Leak detector"/>
            <ToolCard image={i7} alt={"Tile Tapping Rod"} text="Tile tapping rod"/>
            <ToolCard image={i8} alt={""} text="Spirit level"/>

        </Row>
            </section>
        </>
     );
}
 
export default Tools;