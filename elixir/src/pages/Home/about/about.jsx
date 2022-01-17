import { Col, Row,Form,Button } from "react-bootstrap";
import { useFormik } from 'formik';

const About = () => {
    function onKeyDown(keyEvent) {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
      }
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
    const formik = useFormik({
        initialValues: {
          email: '',
          name:'',
          phone:'',
          message:'',

        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return ( 
        <Row>
            <Col lg={6} xs={12}>
                <h2>About us</h2>
                <p>Our Professional Snagging Surveyors have an excellent insight into the mindset of developers. We have the in-depth knowledge and experience gained from over 15 years in the construction / property industry.</p>
                <Row>
                    <Col>
                        <h2>100%</h2>
                        <h6>Client satisfaction</h6>
                    </Col>
                    <Col>
                        <h2>2,200</h2>
                        <h6>Properties snagged</h6>
                    </Col>
                </Row>
            </Col>
            <Col lg={6} xs={12}>
                <Form onSubmit={formik.handleSubmit} onKeyDown={onKeyDown}>
                    <h2>Get in touch with us</h2>
                    <p>Learn More About Inspection & Snagging Today!</p>
                    <Form.Group className="mb-3">
                        <Form.Control value={formik.values.name} onChange={formik.handleChange} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control  value={formik.values.email} onChange={formik.handleChange}  type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control value={formik.values.phone} onChange={formik.handleChange}  type="tel" placeholder="Enter phone" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control  value={formik.values.message} onChange={formik.handleChange}  as="textarea" placeholder="Enter phone" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
     );
}
 
export default About;