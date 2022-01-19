import { Row ,Col} from "react-bootstrap";
import "./prop.css";

const Prop = () => {
    return ( 
        <>
                    <Row className="headerh">
                <h2>Property handover inspection</h2>
                <p>Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property.</p>
            </Row>
        <section className="snag-props-wrapper">


            <Row>
                    <img src="/images/services/p1.jpg" className="snag-props-image"/>
            </Row>
            <Row className="snag-props-list">
                    <h6>Are you a New Home Owner or an Investor?</h6>
                    <ul>
                        <li>Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property</li>
                    </ul>
            </Row>
            <Row  className="snag-props-list">
                <h6>Few Major issues which cannot be Traced by Homeowners/Investors without Our Engineers Inspection</h6>
                <ul>
                <li>The Working condition of the Air condition Unit.</li>
                <li>Moisture content on the Wall.</li>
                <li>The sealant condition around the Doors and Frames.</li>
                <li>Endoscopic Inspection of the Drain and the AC Ducts.</li>
                <li>The Sound Level inside your Home.</li>
                <li>The Exhaust and Suction of the Equipment and Exhaust System.</li>
                <li>The working condition of the Power Sockets.</li>
                <li>Working condition of the Water Pump Systems.</li>
                <li>Working mechanism of water Tanks and Float Valve/Float Switch system and thereby avoiding possible Leakages and High Utility Bills.</li>
                <li>Making sure all the service Area for Kitchen and Laundry Equipment are of standard size and thereby allowing easy Move in and workability of the appliances.</li>
                <li>Rooftop Inspection of Civil Finishes,Electrical and Mechanical Equipments.</li>
                </ul>
            </Row>
        </section>
        </>
     );
}
 
export default Prop;