import { Col ,Row} from "react-bootstrap";
import "./Footer.css";
import { GeoAltFill,TelephoneFill,Facebook,Instagram,Twitter,Youtube } from "react-bootstrap-icons";

const Footer = () => {
    return ( 
        <footer className="footer">
            <Row>
                <Col lg={4} className="company-wrapper">
                    <img alt="footer-logo" src="/images/common/logo-footer.png"/>
                    <p>We deliver only quality</p>
                </Col>  
                <Col lg={4} className="footer-contact-wrapper">
                    <h4>Contact us</h4>
                    <p><GeoAltFill/>&nbsp;&nbsp;101, Al Mehri Building, Ras Al Khor, Dubai, UAE</p>
                    <p><TelephoneFill/>&nbsp;&nbsp;+971 4 3302605</p>
                </Col>
                <Col lg={4} className="footer-social">
                    <h4>Follow us</h4>
                    <a style={{color:"#4267B2"}} href="https://www.facebook.com/elixirpropertymanagement"><Facebook/></a>
                    <a style={{color:"#bc2a8d"}} href="https://www.instagram.com/elixirpropertymanagement/"><Instagram/></a>
                    <a style={{color:"#1DA1F2"}} href=""><Twitter/></a>
                    <a style={{color:"#FF0000"}} href=""><Youtube/></a>
                </Col>
            </Row>
            <Row>
                <section className="copyright-wrapper">
                    <p>Copyright © 2022 Elixir Property Snagging. All rights reserved.</p>
                    <a href="https://code2break.com">Developed by Code2Break solutions</a>
                </section>
            </Row>
        </footer>
     );
}
 
export default Footer;