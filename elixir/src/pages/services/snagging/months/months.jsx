import { Row } from "react-bootstrap";
import Scope from "../../../../components/scope/scope";
import img from "../../../../images/services/p3.jpg"
import "./months.css"
const Months = () => {
    return ( 
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
            <p>Every developer provides a 11 month warranty period for new property; Is your warranty due to expire and you want to make sure your all the issues are addressed prior to End of DLP Period

Our Team of experts conducts a technical inspection for the property and provide you with photographic report to present to the developer prior to Expire of DLP. These make sure you don’t have to pay for any costly repair at any immediate or later stage and the DLP warranty service is utilised to the full extent for the benefit of the owner.

Thus engaging Snagging company ensures you have peace of mind with professional opinion and helps to present the report to developer prior to expiry of DLP Period.</p>
            </Row>
            </section>
        </section>
     );
}
 
export default Months;