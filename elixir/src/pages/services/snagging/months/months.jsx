import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Scope from "../../../../components/scope/scope";
import img from "../../../../images/services/p3.jpg"
import "./months.css"
import { useLocation } from "react-router-dom";
import SubHeader from "../../../../components/subheader/subheader"
import Whatsappicon from "../../../../components/whatsapp/whatsapp";
const Months = () => {
  const desc = "Our Company not only provides the Property Handover Services but also Property Defect Liability Inspection In Dubai. All you need to do is visit our website and contact us to proceed."
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      document.title="Professional in Dubai UAE"
      document.querySelector('meta[name="description"]').setAttribute("content", desc);
    }, [location]);
    return ( 
      <>
      <SubHeader/>
      <Whatsappicon/>
      <Container>
      <section className="months">
            <Row className="header">
            <h2>11 month defect liability inspection</h2>

            </Row>
            
            <section className="snag-props-wrapper5">
            <Row>
            <img src={img}/>

            </Row>
            <Scope/>

            <Row>
            <p>
            Every developer provides an 11 month warranty period for the new property; Is your warranty due to expire and do you want to make sure all the issues are addressed prior to the End of the DLP Period Our Team of experts conducts a technical inspection for the property and provide you with the photographic report to present to the developer prior to Expire of DLP. These make sure you don’t have to pay for any costly repair at any immediate or later stage and the DLP warranty service is utilized to the full extent for the benefit of the owner. Thus engaging a Professional Snagging company in Dubai, ensures you have peace of mind with a professional opinion and helps to present the report to developers prior to the expiry of the DLP Period.

              </p>
              </Row>
            </section>
        </section>
      </Container>
      </>
     );
}
 
export default Months;