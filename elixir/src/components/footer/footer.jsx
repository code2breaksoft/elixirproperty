import { Col ,Row} from "react-bootstrap";
import "./Footer.css";
import { GeoAltFill,TelephoneFill,Facebook,Instagram,Twitter,Youtube } from "react-bootstrap-icons";

const Footer = () => {
    return ( 
        <footer className="footer">
            <Row>
                <Col lg={4}>
                    <img alt="footer-logo" src="/images/common/logo-footer.png"/>
                    <p>We deliver only quality</p>
                </Col>  
                <Col lg={4}>
                    <h4>Contact us</h4>
                    <p><GeoAltFill/>101, Al Mehri Building, Ras Al Khor, Dubai, UAE</p>
                    <p><TelephoneFill/>+971 4 3302605</p>
                </Col>
                <Col lg={4}>
                    <h4>Follow us</h4>
                    <a href="https://www.facebook.com/elixirpropertymanagement"><Facebook/></a>
                    <a href="https://www.instagram.com/elixirpropertymanagement/"><Instagram/></a>
                    <a href=""><Twitter/></a>
                    <a href=""><Youtube/></a>
                </Col>
            </Row>
            <Row>

            </Row>
        </footer>
     );
}
 
export default Footer;