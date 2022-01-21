import { Parallax } from "react-parallax";
import { Button, Container, Row,Col } from "react-bootstrap";
import './book.css';
import { useEffect, useState } from "react";
import FormModal from "../../../components/modal/modal";
import React from "react";
const Book = () => {
    const [paralaxProp,setParallaxProp] = useState({
        width:"100vw",
        height:"50rem",
        strength:"200"
    });
    useEffect(()=>{
        if(window.innerWidth<786){
            setParallaxProp({
                width:"200vw",
                height:"25rem",
                strength:0
            });
        }
    },[]);
    const [showM,setShow] = React.useState(false);
    const showModal = ()=>{
        setShow(true);
    }
    const hideModal = ()=>{
        setShow(false);
    }
    return ( 
        <>
        <FormModal show={showM} handleClose={hideModal}/>
        <section style={{overflowX:"hidden"}}>
        <Row style={{height:"60vh"}}>
                <Parallax className="border d-flex align-items-center justify-content-center par" bgImageStyle={{width:paralaxProp.width,height:paralaxProp.height, filter: "brightness(80%)"}}	 blur={0} bgImage="/images/book/widehome.jpg" bgImageAlt="the cat" strength={paralaxProp.strength}>
                <Container fluid  className="text-center book-wrap" >
                    <Row>
                        <Col>
                        <h5>DON’T HESTITATE TO CONTACT US</h5>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h2>MAKE AN APPOINTMENT NOW</h2>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h5>Call now: +971 4 3302605</h5>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button variant="primary" size="lg" onClick={showModal}>Enquire now</Button>

                        </Col>
                    </Row>
                </Container>
            </Parallax>
        </Row>
        </section>
        </>
     );
}
 
export default Book;
