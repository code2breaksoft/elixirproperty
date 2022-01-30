import img from "../../../../images/services/p2.jpg"
import { Row } from "react-bootstrap";
import "./resale.css"
import Scope from "../../../../components/scope/scope";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Resale = () => {
    const location = useLocation();
    const desc = "We at Elixir Property Inspect provide one of the best Property Realstate inspections in Dubai. For more information visit our website or give a us call."
    useEffect(() => {
      window.scrollTo(0, 0);
      document.title="Best Property Resale Inspection services in UAE"
      document.querySelector('meta[name="description"]').setAttribute("content", desc);
    }, [location]);
    return ( 
        <section className="resale">
            <Row className="header">
            <h2>Property Resale Inspection</h2>

            </Row>
            <section className="snag-props-wrapper5">
            <Row>
                <img src={img}/>
            </Row>
            <Scope/>
            <Row>
            <p>Are you looking to buy an used Property in UAE and want us to conduct a detailed Technical inspection to avoid any issues in future. The inspection is to make sure you get what you are paying for. Our team inspects the Property on your behalf and provides a technical report on the present state of the Property to help you make informed decision.

Our Engineer provide you with a Technical Report highlighting the major issues in the Property which requires your attention. The inspection helps you to negotiate better with the buyer and helps to avoid any major maintenance cost after the Purchase.
The Report contains details about Electrical, Civil, Plumbing and Mechanical defects and present state of the Property; After the end of service upon request of client we provide a quote for rectification of mentioned issues.

Thus engaging Snagging company ensures you have peace of mind with professional opinion and helps in making informed decisions and thereby your Investments are well protected.</p>
            </Row>
            </section>
        </section>
     );
}
 
export default Resale;