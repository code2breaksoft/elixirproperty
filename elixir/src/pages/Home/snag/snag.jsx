import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import "./snag.css";
import Animate from 'animate.css-react'
 
import 'animate.css/animate.css' 
const Snag = () => {
    return ( 
        <section id="snag">
            <Row>
                <Col lg={4} xs={{ span: 12, order: 2 }}  lg={{ span: 4, order: 1 }}>
                    <img src="/images/snag/a1.jpg" alt="what-is-snagging" width={"100%"}/>
                </Col>
                <Col lg={8} className="snag-content" xs={{ span: 12, order: 1 }}  lg={{ span: 8, order: 2 }} >
                    <h2 className="animate__animated animate__bounceInLeft">What is snagging?</h2>
                    <p>Property Snagging is a service which is opted by the homeowners and investors after purchase of the any new Property i.e Villa, Townhouse, Apartment or any commercial Property.

                    Snagging is the process of comprehensive inspection before purchasing a New Property from the Developer.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg={8} className="snag-content" xs={{ span: 12, order: 1 }}>
                    <h2 className="animate__animated animate__bounceInLeft">Who needs snagging?</h2>
                    <p>
                    Anyone buying a new build home
                     or a home in the secondary market
                      should consider a snagging inspection. 
                      You could argue that if you’re spending
                       anything it’s crazy not to!
                        A snagging inspection can also be useful for
                         buying ready built homes or at the 11 month
                          warranty period. Also, if you’ve already moved 
                          in and are having snagging issues with your
                           developer then a professional snagging 
                           report can help give weight to your case.
                    </p>
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
                    <h2 className="animate__animated animate__bounceInLeft">Why elixir snagging?</h2>
                    <p>Our Property Snagging service is at par 
                        where we focus on quality of our Snagging
                         Report as per Engineering standards which 
                         differentiates us from the other players in
                          the market who only focus on number of snags;
                           We always believe is quality which in turns 
                           generates us a referral client..</p>
                </Col>
            </Row>
        </section>
     );
}
 
export default React.memo(Snag);