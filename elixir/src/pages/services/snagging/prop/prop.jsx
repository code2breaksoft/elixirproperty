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
            <Row className="snag-props-list box-content">
                <h6>Why propety snagging?</h6>
                <p>Many experts will say that snagging is more important now than ever before. New house building is at record levels – and developers are under pressure to complete every house quickly – but there’s a shortage of many skilled trades. So there’s more potential for things to go wrong.
                Snagging is the process of comprehensive inspection before purchasing a New Property from the Developer.
                </p>
                <p>Following are the important reasons why Property snagging is essential-
                </p>
                <ul className="box-ul">
                <li>Snagging Inspection grants Investor/Home Owner an opportunity to make sure the Unit is same condition as per agreed in SPA.</li>
                <li>Snagging inspection makes sure that all the major equipment’s and components are in healthy condition; and if anything is faulty can be rectified prior to have Smooth Property Handover.</li>
                <li>Snagging permits a Happy move into your new property.</li>
                <li>Snagging makes sure your investments are protected.</li>
                </ul>
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
            <Row className="snag-props-list">
                <h6></h6>
            </Row>
        </section>
        </>
     );
}
 
export default Prop;