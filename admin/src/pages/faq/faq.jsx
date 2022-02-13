import { useState } from "react";
import { Button, Col, Container, Row,Modal,Form } from "react-bootstrap";
import axios from "axios"

const Faq = () => {
    const [showAdd,setAdd] = useState(false);
    const [qus,setQus] = useState('');
    const [ans,setAns] = useState('');
    const submitFaq = async()=>{
        try{
            const data = new FormData();
            data.append("qus",qus);
            data.append("ans",ans);
            await axios.post("http://localhost:5000/addfaq.php",data);
            alert("added faq");
            ()=>setAdd(false)
        }
        catch(e){
            alert("Failed to add faq")
        }
    }
    return ( 
        <Container fluid>
            <Modal show={showAdd} onHide={()=>setAdd(false)} size="lg">
                    <Modal.Header closeButton>
                    <Modal.Title>Add faq</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Question</Form.Label>
                            <Form.Control onChange={(e)=>setQus(e.target.value)} type="text" placeholder="Enter question" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Answer</Form.Label>
                            <Form.Control onChange={(e)=>setAns(e.target.value)} as="textarea" placeholder="Enter answer" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setAdd(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitFaq}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            <Row>
                <Col lg={12}>
                    <h1>Faq</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button variant="primary" onClick={()=>setAdd(true)}>Add faq</Button>
                </Col>
                <Col lg={12}>
                    <Button variant="primary">Delete faq</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Faq;