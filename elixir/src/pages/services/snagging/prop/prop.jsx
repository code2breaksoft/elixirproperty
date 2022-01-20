import { Row ,Col} from "react-bootstrap";
import "./prop.css";

const Prop = () => {
    return ( 
        <>
        <section className=" animate__animated animate__lightSpeedInRight">
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
            <Row className="snag-props-list">
                <h6></h6>
            </Row>
            </section>
        </section>
        </>
     );
}
 
export default Prop;