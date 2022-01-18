import { Row } from "react-bootstrap";
import ServiceCard from "./serviceCard/serviceCard";

import "./services.css";
const Services = () => {
    return ( 
        <>
            <section id="services">
            <Row>
            <h2>Our services</h2>
            <p>Elixir Property Management is a team of young dynamic people with a fresh Mindset, Promoting agility, convenience and quality Property Snagging, Inspections and Maintenance services.
            </p>
        </Row>
        <Row  xs={1} md={3} className="g-4">
            <ServiceCard image="/images/elixir/service2.png"
             title="Property Snagging" 
             text="Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property."/>
            <ServiceCard
                image="/images/elixir/service1.png"
                title="Property Maintenance"
                text="All property occupants look for regular maintenance to keep their acquired premises functional and elegant. Our team of expertsare well equipped to carry out desired maintenance services"
            />
            <ServiceCard
                image="/images/elixir/service3.png"
                title="Specialized Services"
                text="We as professionals provide specialized services to manage any break downs and repair works in concern to electrical, mechanical and plumbing areas.It’s the simpler things that make the difference."
            />
        </Row>
            </section>
        </>
     );
}
 
export default Services;