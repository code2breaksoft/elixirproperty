import axios from "axios";
import { useState } from "react";
import { Container, Row,Col,Form, Button } from "react-bootstrap";

const Sample = () => {
    const [file,setFile] = useState();
    const submitFile = async()=>{
        try{
            const data = new FormData();
            data.append("sample",file);
            await axios.post("http://localhost:5000/submitSample.php",data)
            alert("Uploaded sample file!")
        }
        catch(e){
            alert("Failed to upload file");
        }
    }
    return ( 
        <Container fluid>
            <Row>
            <Col lg={12}>
                    <h3>Sample Report</h3>
                </Col>
                <Col lg={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={(e)=>{
                        setFile(e.target.files[0])
                    }} accept="application/pdf" type="file" placeholder="update sample report" />
                </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" onClick={submitFile}>Update sample report</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Sample;