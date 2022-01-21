import { Button, Col, Row } from "react-bootstrap";
import SampleModal from "../../../components/sample/sample";
import "./sample.css";
import { useState } from "react";
const Sample = () => {
    const [showM,setShow] = useState(false);
    const showModal = ()=>{
        setShow(true);
    }
    const hideModal = ()=>{
        setShow(false);
    }
    return ( 
        <>
        <SampleModal show={showM} handleClose={hideModal}/>
                    <Row className="sample">
            <h2>Sample report</h2>
            <Col>
                <p>Look into our sample snagging and inspection report&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" size="lg" onClick={showModal}>Download now</Button></p>
            </Col>
        </Row>
        </>
     );
}
 
export default Sample;