import { Navbar,Nav,Container ,NavDropdown} from "react-bootstrap";
import './Header.css';
const Header = () => {
    return ( 
        <Navbar bg="none" expand="lg" sticky="top" id="navbar">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src="/images/common/logo.png" width="100" height="20"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Our services" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    </NavDropdown>
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