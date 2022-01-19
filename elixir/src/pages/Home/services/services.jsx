import { Row } from "react-bootstrap";
import ServiceCardMod from "./serviceCardMod/serviceCardMod";

import "./services.css";
const Services = () => {
    return ( 
        <>
            <section id="services">
            <Row>
            <h2>Our Snagging Services</h2>
            <p>Elixir Property Management is a team of young dynamic people with a fresh Mindset, Promoting agility, convenience and quality Property Snagging, Inspections and Maintenance services.
            </p>
        </Row>
        <Row>
        <ServiceCardMod 
            path="/services/snagging"
            image="/images/services/p1.jpg"
            title="Property Handover Inspection" 
            text="Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property."/>
            <ServiceCardMod
                image="/images/services/p2.jpg"
                title="Property Resale Inspection"
                text="All property occupants look for regular maintenance to keep their acquired premises functional and elegant. Our team of expertsare well equipped to carry out desired maintenance services"
                path="/services/maintenence"
            />
            <ServiceCardMod
                image="/images/services/p3.jpg"
                title="11 Month-Defect Liability Inspection"
                text="We as professionals provide specialized services to manage any break downs and repair works in concern to electrical, mechanical and plumbing areas.It’s the simpler things that make the difference."
                path="/services/specialized"
            />
            <ServiceCardMod
                image="/images/services/p4.jpeg"
                title="Property move in/out inspection"
                text="We as professionals provide specialized services to manage any break downs and repair works in concern to electrical, mechanical and plumbing areas.It’s the simpler things that make the difference."
                path="/services/specialized"
            />
        </Row>
            </section>
        </>
     );
}
 
export default Services;