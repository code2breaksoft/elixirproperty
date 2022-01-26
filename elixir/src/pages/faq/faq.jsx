import { Container,Row,Accordion } from "react-bootstrap";
import axios from 'axios';
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import {useState,useEffect} from 'react';
import "./faq.css"
import SubHeader from "../../components/subheader/subheader"

const Faq = () => {
    const [faq,setFaq] = useState([])
    useEffect(async()=>{
        let res = await axios.get("/faq/faq.json");
        setFaq(res.data)
    },[]);
    return ( 
        <>
            <SubHeader/>
                <Container fluid className="faq-wrapper">
                    <Row>
                        <h1>FAQ</h1>
                    </Row>
                    <Row>
                    {
                        faq.map((item,key)=>(
                            <Accordion>
  <Accordion.Item eventKey={key}>
    <Accordion.Header>{item.question}</Accordion.Header>
    <Accordion.Body>
                            {
                                item.answer
                            }
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                        ))
                    }
                    </Row>
                </Container>
            <Footer/>
        </>
     ); 
}
 
export default Faq;