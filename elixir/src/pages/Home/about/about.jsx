import { Col, Row,Form,Button } from "react-bootstrap";
import { useFormik } from 'formik';
import "./about.css";
import { ShieldLockFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import civil from "../../../images/about/civil.png";
import mech from "../../../images/about/mech.png";
import elec from "../../../images/about/elec.png";
import roof from "../../../images/about/roof.png";
import therm from "../../../images/about/therm.png";
import water from "../../../images/about/water.png";
const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.firstName.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.phone) {
      errors.phone = 'Required';
    } else if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}/i.test(values.phone)) {
      errors.phone = 'Invalid mobile number';
    }
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.message) {
        errors.message = 'Required';
      } else if (values.message.length > 15) {
        errors.message = 'Must be 15 characters or less';
      }
    return errors;
  }; 
  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  } 
const About = () => {


    const formik = useFormik({
        initialValues: {
          email: '',
          name:'',
          phone:'',
          message:'',

        },
        validate:validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      const nav = useNavigate();
    return ( 
      <section id="about">
                <Row className="gx-5">
            <Col lg={6} xs={12} className="about-outer-wrap">
                <h2>About us</h2>
                <p>
                Elixir Property Management is a team of young dynamic people with a fresh Mindset, Promoting agility, convenience and quality Property Snagging, Inspections and Maintenance services. Our Property Snagging service is at par where we focus on quality of our Snagging Report as per Engineering standards which differentiates us from the other players in the market who only focus on number of snags. We always believe is quality which in turns generates us a referral client.
                </p>
                <Row className="inspect-types">
                  <h5>What do we inspect?</h5>
                  <Col lg={4} xs={6}>
                    <img src={roof} className="inspect-types-img"/>
                    <p>Roof Top Inspection</p>
                  </Col>
                  <Col lg={4} xs={6}>
                      <img src={therm} className="inspect-types-img"/>
                      <p>Thermal Inspection</p>
                  </Col>
                  <Col lg={4} xs={6}>
                      <img src={civil} className="inspect-types-img"/>
                      <p>Civil Inspection</p>
                  </Col>
                  <Col lg={4} xs={6}>
                    <img src={water}  className="inspect-types-img"/>
                      <p>Water Tank System Inspection</p>
                  </Col>
                  <Col lg={4} xs={6}>
                  <img src={elec}  className="inspect-types-img"/>
                      <p>Electrical Inspection</p>
                  </Col>
                  <Col lg={4} xs={6}>
                  <img src={mech}  className="inspect-types-img"/>
                      <p>Mechanical Inspection</p>
                  </Col>
                </Row>
                <Row className="about-btn-wrapper">
                  <Col>
                    <Button variant="primary" size="lg" onClick={()=>{nav("/faq")}}>FAQ</Button>
                  </Col>
                  <Col>
                    <Button  variant="primary" size="lg" onClick={()=>{nav("/blog")}}>Blog</Button>
                  </Col>
                </Row>
            </Col>
            <Col lg={6} xs={12} id="contact">
              <section id="form-section">
              <div id="form-header">
                      <h2>Get in touch with us</h2>
                      <p>Learn More About Inspection & Snagging Today!</p>
                    </div>
                <Form onSubmit={formik.handleSubmit} onKeyDown={onKeyDown} id="contact-form">
                    <Form.Group className="mb-3">
                        <Form.Control value={formik.values.name} onChange={formik.handleChange("name")} type="text" placeholder="Enter name" />
                        <Form.Control.Feedback type="invalid">
                        {formik.errors.name ? formik.errors.name : null}

                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control  value={formik.values.email} onChange={formik.handleChange("email")}  type="email" placeholder="Enter email" />
                        <Form.Control.Feedback type="invalid">
                        {formik.errors.email ? formik.errors.email : null}
 
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control value={formik.values.phone} onChange={formik.handleChange("phone")}  type="tel" placeholder="Enter phone" />
                        <Form.Control.Feedback type="invalid">
                        {formik.errors.phone ? formik.errors.phone : null}
 
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control id="message-area" value={formik.values.message} onChange={formik.handleChange("message")}  as="textarea" placeholder="Your message" />
                        <Form.Control.Feedback type="invalid">
                        {formik.errors.message ? formik.errors.message : null}
                         </Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                    <Button variant="primary" type="submit" className="ml-auto">
                        Submit
                    </Button>
                    </Row>
                    <p id="form-warning"><ShieldLockFill/>&nbsp;&nbsp;We hate spam, and we respect your privacy.</p>
                </Form>
              </section>
            </Col>
        </Row>
      </section>
     );
}
 
export default About;