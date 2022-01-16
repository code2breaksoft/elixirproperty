import { Parallax } from "react-parallax";
import { Button, Container, Row,Col } from "react-bootstrap";
import './book.css';
const Book = () => {
    return ( 
        <Row style={{height:"50vh",width:"100vw"}}>
                <Parallax className="border d-flex align-items-center justify-content-center" bgImageStyle={{width:"100vw",height:"50rem", filter: "brightness(60%)"}}	 blur={0} bgImage="/images/book/widehome.jpg" bgImageAlt="the cat" strength={500}>
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
                        <h5>Call now: 808526533666</h5>

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
     );
}
 
export default Book;
