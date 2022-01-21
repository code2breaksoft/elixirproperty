import React from "react";
import { Container, Row,Col, Button } from "react-bootstrap";
import "./snag.css";
import Animate from 'animate.css-react'
import { isInViewport } from "../../../common/common";
import 'animate.css/animate.css' 
import FormModal from "../../../components/modal/modal";
const Snag = () => {
    const [showM,setShow] = React.useState(false);
    const showModal = ()=>{
        setShow(true);
    }
    const hideModal = ()=>{
        setShow(false);
    }
    return ( 
        <>
        <FormModal show={showM} handleClose={hideModal}/>
        <section id="snag">
            <Row>
                <Col lg={4} xs={{ span: 12, order: 2 }}  lg={{ span: 4, order: 1 }}>
                    <img src="/images/snag/a1.jpg" alt="what-is-snagging" width={"100%"}/>
                </Col>
                <Col lg={8} className="snag-content" xs={{ span: 12, order: 1 }}  lg={{ span: 8, order: 2 }} >
                    <h2 >What is snagging?</h2>
                    <p>Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property.

                    Snagging is the process of comprehensive inspection before purchasing a New Property from the Developer.
                    </p>
                    <Button variant="primary" size="lg" onClick={showModal}>Book now</Button>
                </Col>
            </Row>
            <Row>
                <Col lg={8} className="snag-content" xs={{ span: 12, order: 1 }}>
                    <h2 >Who needs snagging?</h2>
                    <p>
                    Individuals or institutions buying a brand new construct home or a home within the secondary marketplace have to bear in mind a snagging inspection. you can argue that if you’re spending some thing it’s loopy no longer to! A snagging inspection also can be useful for buying geared up built houses or on the 11 month assurance duration. additionally, if you’ve already moved in and are having snagging issues with your developer then a expert snagging record can assist provide weight on your case.
                    </p>
                    <Button variant="primary" size="lg" onClick={showModal}>Enquire now</Button>
                </Col>
                <Col lg={4} xs={{ span: 12, order: 2 }}>
                    <img src="/images/snag/a2.jpg" alt="who-needs-snagging"  width={"100%"}/>
                </Col>
            </Row>
            <Row>
                <Col lg={4} xs={{ span: 12, order: 2 }} lg={{ span: 4, order: 1 }}>
                    <img src="/images/snag/a3.jpeg" alt="is-snagging-necessary"  width={"100%"}/>
                </Col>
                <Col lg={8}  className="snag-content animate__animated animate__bounceInLeft" xs={{ span: 12, order: 1 }} lg={{ span: 8, order: 2 }}>
                    <h2 >Why elixir snagging?</h2>
                    <p>Our Property Snagging service is at par 
                        where we focus on quality of our Snagging
                         Report as per Engineering standards which 
                         differentiates us from the other players in
                          the market who only focus on number of snags;
                           We always believe is quality which in turns 
                           generates us a referral client..</p>
                           <Button variant="primary" size="lg"onClick={showModal} >Get free consultation</Button>
                </Col>
            </Row>
        </section>
        </>
     );
}
 
export default React.memo(Snag);