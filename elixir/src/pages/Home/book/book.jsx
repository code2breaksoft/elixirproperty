import { Parallax } from "react-parallax";
import { Button, Container, Row,Col } from "react-bootstrap";
import './book.css';
import { useEffect, useState } from "react";
const Book = () => {
    const [paralaxProp,setParallaxProp] = useState({
        width:"100vw",
        height:"50rem",
        strength:"300"
    });
    useEffect(()=>{
        if(window.innerWidth<786){
            setParallaxProp({
                width:"200vw",
                height:"25rem",
                strength:65
            });
        }
    },[]);
    return ( 
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
                        <Button variant="primary" size="lg">Enquire now</Button>

                        </Col>
                    </Row>
                </Container>
            </Parallax>
        </Row>
        </section>
     );
}
 
export default Book;
