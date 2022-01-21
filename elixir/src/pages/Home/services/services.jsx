import { Row } from "react-bootstrap";
import ServiceCardMod from "./serviceCardMod/serviceCardMod";

import "./services.css";
import img1 from "../../../images/services/p1.jpg"
import img2 from "../../../images/services/p2.jpg"
import img3 from "../../../images/services/p3.jpg"
import img4 from "../../../images/services/p4.jpeg"
const Services = () => {
    return ( 
        <>
            <section id="services" >
            <Row>
            <h2>Our Snagging Services</h2>
            <p>Elixir Property Management is a team of young dynamic people with a fresh Mindset, Promoting agility, convenience and quality Property Snagging and Inspections.
            </p>
        </Row>
        <Row>
        <ServiceCardMod 
            path="/services/property-handover-inspection"
            image={img1}
            title="Property Handover Inspection" 
            text="Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property."/>
            <ServiceCardMod
                image={img2}
                title="Property Resale Inspection"
                text="Our Team carries out Handover Snagging,11 Month DLP Inspection and Resale Condition Inspection,we represent the owner and carryout inspections with or without the presence of investor."
                path="/services/property-resale-inpection"
            />
            <ServiceCardMod
                image={img3}
                title="11 Month-Defect Liability Inspection"
                text="We as professionals provide specialized services to manage any break downs and repair works in concern to electrical, mechanical and plumbing areas.It’s the simpler things that make the difference."
                path="/services/11-month-defect-liablity-inspection"
            />
            <ServiceCardMod
                image={img4}
                title="Property move in/out inspection"
                text="An Engineer inspects the Property with use of Right Tools necessary for Snagging; With the Right Tools and Non Invasive methods our Engineers. Make sure Moisture is detected by Moisture Meter and Thermal Inspections."
                path="/services/property-move-in-out-inspection"
            />
        </Row>
            </section>
        </>
     );
}
 
export default Services;