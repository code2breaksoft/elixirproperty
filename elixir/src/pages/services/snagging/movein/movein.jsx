import "./movein.css";
import { Row,Tabs ,Tab, Container} from "react-bootstrap";
import img1 from "../../../../images/services/p4.jpeg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SubHeader from "../../../../components/subheader/subheader"
import Whatsappicon from "../../../../components/whatsapp/whatsapp";
const MoveIn = () => {
        const location = useLocation();
        const desc = "The Elixir Inspect also Provides Move in & Move Out Services in Dubai, looking at issues and reporting on deficiencies. Contact us for more information."
        useEffect(() => {
          window.scrollTo(0, 0);
          document.title="Top Property move in/out inspection in Dubai UAE"
          document.querySelector('meta[name="description"]').setAttribute("content", desc);
        }, [location]);
    return (  

        <>
        <SubHeader/>
        <Whatsappicon/>
        <Container>
        <section className=" animate__animated animate__fadeIn">
        <Row className="headerh">
    <h2>Property Move In/Out Inspection</h2>
    <p>Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property.</p>
</Row>
<section className="snag-props-wrapper">


<Row>
        <img src={img1} className="snag-props-image"/>
</Row>
        <Row className="mtabs">
        <Tabs variant="pills" defaultActiveKey="home" className="mb-3">
  <Tab eventKey="home" title="Property move in" className="x">
  <Row className="snag-props-list">
        <h6>Are you a Landlord and Requires Sign Acceptance of Property by Tenant/Guest?</h6>
        <ul>
            <li>Property Move In Inspection is a service which is opted by the Real Estate Agents, Homeowners and investors during the Move IN of the Property i.e Villa,Townhouse,Apartment or any commercial Property.</li>
            <li>This Professional Signed and Recorded Report acts as a proof and Helps Landlord/Tenant and Saves time and argument and helps is ease of release of security deposit cheque at the End of Tenancy.</li>
        </ul>
</Row>
<Row  className="snag-props-list">
    <h6>Why Move IN Inspection is Essential?
</h6>
        <ul>
        <li>To Make sure Landlords Investements are protected.
</li>
        <li>To Make sure there is hassle free Move out and the Tenant knows exactly how he is supposed to deliver the Property at the End of Tenancy.
</li>
    </ul>
</Row>
<Row  className="snag-props-list">
    <h6>Why you should always Employ Professional Snagging Company?

</h6>
        <ul>
        <li>An Engineer inspects the Property with use of Right Tools necessary for Snagging; With the Right Tools and Non Invasive methods our Engineers; Make sure Moisture is detected by Moisture Meter and Thermal Inspections.
</li>
<li>Making sure all the Mechanical Systems such as Air condition Units,Water Tank System and Pump system are Tested to make sure systems are in healthy condition and therby protect your investment.

</li>
    </ul>
</Row>

  </Tab>
  <Tab eventKey="profile" title="Propety move out">
  <Row  className="snag-props-list">
<h6>Are you a Landlord and Require a Move Out Report?



</h6>
        <ul>
        <li>Property Move Out Inspection is a service which is opted by the Real Estate Agents, Homeowners and investors during the Move Out of the Property i.e Villa, Townhouse, Apartment or any commercial Property.
</li>
        <li>Knowing the required maintenance helps Landlord to Fix the issues immediately after Moveout and the Unit will be immediately ready for viewings in Good condition and therby increases ROI.

</li>
    </ul>
</Row>
<Row  className="snag-props-list">
<h6>Why Move OUT Inspection is Essential?





</h6>
        <ul>
        <li>This ensures Before the Tenant leaves the Property the condition is inspected and the Landdord is know ahead what maintenance works are required.
</li>
        <li>This ensures Before the Tenant leaves the Property the condition is inspected and the Landdord is know ahead what maintenance works are required.
</li>
    </ul>
</Row>
<Row  className="snag-props-list">
<h6>Why you should always Employ Professional Snagging Company?
</h6>
        <ul>
            <li>An Engineer ensures all the major and Minor issues are reported which is followed by a Maiantenance;which helps Landlord to take Timely informed decisions and keeo the Unit in Good condition.
    </li>
        </ul>
</Row>
  </Tab>
</Tabs>
        </Row>
</section>
</section>
        </Container>
</>
    );
}
 
export default MoveIn;