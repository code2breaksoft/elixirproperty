import { Row,Tab ,Col,Nav} from "react-bootstrap";
import MoveIn from "./movein/in";
import MoveOut from "./moveout/out";
import Prop from "./prop/prop";
import "./snagging.css";

const Snagging = () => {
    return ( 
        <section className="service-snag-wrapper">
            <Row className="header">
                <h2>Property snagging</h2>
                <p>Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property.</p>
            </Row>
            <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column" id="tab-nav">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Property Handover Inspection</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Property Resale Inspection</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">11 Month-Defect Liability Inspection</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="forth">Property move in/out inspection</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Prop/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        </Tab.Pane>
                        <Tab.Pane eventKey="forth">
                            <MoveOut/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </Row>
        </section>
     );
}
 
export default Snagging;