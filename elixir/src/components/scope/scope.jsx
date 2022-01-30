import { Container, Row,Col } from "react-bootstrap";
import "./scope.css";
function importAll() {
    let ar = [];
    for(let i=1;i<=9;i++){
        ar.push(require(`../../images/detail/${i}.png`));
    }
    return ar;
}
const Scope = () => {
    let images = importAll();
    return ( 
        <>
            <Container fluid>

            <Row className="detailr-header">
        <h4>Detailed scope of 
            provided services
        </h4>
    </Row>
    <Row className="detailr-list">
        <Col xs={6} lg={6}>
            <ul id="flist">
            <li><img src={images[0]}/>Inspection of Air conditioning units</li>
            <li><img src={images[1]}/>Inspection of fixed electrical units</li>
            <li><img src={images[8]}/>Visual inspection of external balcony</li>
            <li><img src={images[3]}/>Thermal Inspection</li>
            </ul>
        </Col>
        <Col>
            <ul >
            <li><img src={images[4]}/>Rooftop Inspection of Mechanical Equipments</li>
            <li><img src={images[5]}/>Water Tank System and Pump Systems</li>
            <li><img src={images[6]}/>Power Socket Checking</li>
            <li><img src={images[7]}/>Visual Inspection of Interior Elements & Finishes</li>
            </ul>
        </Col>
    </Row>
            </Container>
        </>
     );
}
 
export default Scope;