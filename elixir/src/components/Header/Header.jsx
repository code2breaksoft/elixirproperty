import { Navbar,Nav,Container } from "react-bootstrap";
const Header = () => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#services">Our services</Nav.Link>
                    <Nav.Link href="#about">About us</Nav.Link>
                    <Nav.Link href="#reviews">Reviews</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Header;