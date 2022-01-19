import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import "./snag.css";
const Snag = () => {
    return ( 
        <section id="snag">
            <Row>
                <Col lg={4} xs={{ span: 12, order: 2 }}  lg={{ span: 4, order: 1 }}>
                    <img src="/images/snag/s1.webp" alt="what-is-snagging" width={"100%"}/>
                </Col>
                <Col lg={8} className="snag-content" xs={{ span: 12, order: 1 }}  lg={{ span: 8, order: 2 }} >
                    <h2>What is snagging?</h2>
                    <p>"Snagging" is a necessary process of identifying issues with your property. Snagging issues range from leaks, plumbing faults, un-level ceilings, floors and walls, damaged units, missing insulation, poor joinery and structural issues. For landlords, it is a notoriously stressful and time-consuming process.​ The importance of hiring a snagging company is that we are experts in identifying issues with specialist equipment, and provide one comprehensive snag list for your developer to easily follow.</p>
                </Col>
            </Row>
            <Row>
                <Col lg={8} className="snag-content" xs={{ span: 12, order: 1 }}>
                    <h2>Who needs snagging?</h2>
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
                    <img src="/images/snag/s2.webp" alt="who-needs-snagging"  width={"100%"}/>
                </Col>
            </Row>
            <Row>
                <Col lg={4} xs={{ span: 12, order: 2 }} lg={{ span: 4, order: 1 }}>
                    <img src="/images/snag/s3.webp" alt="is-snagging-necessary"  width={"100%"}/>
                </Col>
                <Col lg={8}  className="snag-content" xs={{ span: 12, order: 1 }} lg={{ span: 8, order: 2 }}>
                    <h2>Why elixir snagging?</h2>
                    <p>Our Property Snagging service is at par where we focus on quality of our Snagging Report as per Engineering standards which differentiates us from the other players in the market who only focus on number of snags; We always believe is quality which in turns generates us a referral client.Our Team with extensive knowledge in Property Handover Snagging, Property Maintenance, Contracting, and customer service understands that every situation is unique which is why we work closely with our clients to make sure the job is completed to their specification and always to a high quality.</p>
                </Col>
            </Row>
        </section>
     );
}
 
export default React.memo(Snag);