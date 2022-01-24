import React from "react";
import { Container, Row,Col, Button } from "react-bootstrap";
import "./snag.css";
import Animate from 'animate.css-react'
import { isInViewport } from "../../../common/common";
import 'animate.css/animate.css' 
import FormModal from "../../../components/modal/modal";
import a1 from '../../../images/snag/a1.jpg';
import a2 from '../../../images/snag/a2.jpg';
import a3 from '../../../images/snag/a3.jpeg';
import i1 from "../../../images/why/1.png";
import i2 from "../../../images/why/2.png";
import i3 from "../../../images/why/3.png";
import i4 from "../../../images/why/4.png";
import i5 from "../../../images/why/5.png";
import i6 from "../../../images/why/6.png";
const Snag = ({country}) => {
    const [showM,setShow] = React.useState(false);
    const showModal = ()=>{
        setShow(true);
    }
    const hideModal = ()=>{
        setShow(false);
    }
    return ( 
        <>
        <FormModal show={showM} handleClose={hideModal} countries={country}/>
        <section id="snag">
            <Row>
                <Col lg={4} xs={{ span: 12, order: 2 }}  lg={{ span: 4, order: 1 }}>
                    <img src={a1} alt="what-is-snagging" width={"100%"}/>
                </Col>
                <Col lg={8} className="snag-content" xs={{ span: 12, order: 1 }}  lg={{ span: 8, order: 2 }} >
                    <h2 >What is Snagging?</h2>
                    <p>Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property.

                    Snagging is the process of comprehensive inspection before purchasing a New Property from the Developer.
                    </p>
                    <Button variant="primary" size="lg" onClick={showModal}>Book now</Button>
                </Col>
            </Row>
            <Row >
                <Col lg={8} className="snag-content" xs={{ span: 12, order: 1 }}>
                    <h2 >Who needs Snagging?</h2>
                    <p>
                    Individuals or institutions buying a brand new construct home or a home within the secondary marketplace have to bear in mind a snagging inspection. you can argue that if you’re spending some thing it’s loopy no longer to! A snagging inspection also can be useful for buying geared up built houses or on the 11 month assurance duration. additionally, if you’ve already moved in and are having snagging issues with your developer then a expert snagging record can assist provide weight on your case.
                    </p>
                    <Button variant="primary" size="lg" onClick={showModal}>Enquire now</Button>
                </Col>
                <Col lg={4} xs={{ span: 12, order: 2 }}>
                    <img src={a2} alt="who-needs-snagging"  width={"100%"}/>
                </Col>
            </Row>
            <Row className="why-container">
                <h2>Why Elixir Snagging?</h2>
                <Col lg={6} xs={12}>
                    <ul id="why-first">
                        <li><img src={i4}/><span className="why-header-li">Report within 48hours hours</span><br/>All the Reports are been Delivered within 48 hours of inspection so as to facilitate you to enjoy and get benefits from your investment at the earliest.</li>
                        <li><img src={i1}/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="why-header-li">Engineer's Inspection</span><br/>All our inspection claims are with photos and  are quantifiable with readings from our sophisticated Inspection Tools.</li>
                        <li><img src={i2}/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="why-header-li">Desnagging</span><br/>After completion of snags our team carries out 2nd inspection for Densnagging to make sure all the snags are completed as per acceptable standards.</li>
                    </ul>
                </Col>
                <Col lg={6} xs={12}>
                    <ul>
                        <li><img src={i6}/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="why-header-li">Work Experience</span><br/>Our Inspectors are qualified Engineers and worked in contracting ,Maintenance and Real Estate industry and in real time have understood the issues faced in property and helped clients manage their property well.</li>
                        <li><img src={i3}/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="why-header-li">Key Points</span><br/>Our Inspection report are Qualitative and focus on the details and in return add value to the clients investment.</li>
                        <li><img src={i5}/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="why-header-li">Technical Advise</span><br/>After the Move IN/Handover we can be contacted for Free Technical Consultation.
Feel Free to Join our mailing list and get tips and tricks to manage maintenance related issues in your Property.</li>
                    </ul>
                </Col>
            </Row>
        </section>
        </>
     );
}
 
export default React.memo(Snag);