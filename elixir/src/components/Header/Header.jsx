import { useState } from "react";
import { Navbar,Nav,Container ,NavDropdown} from "react-bootstrap";
import './Header.css';
const Header = () => {
    const [color,setColor] = useState("none");
    const [fontColor,setFontColor] = useState("white");
    const [shadow,setShadow] = useState("none");
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
            setColor("light");
            setFontColor("#f85359");
            let x = document.getElementsByClassName("nav-link")
            for(let item of x){
                item.style.color="#f85359";
            }
            setShadow("0px 2px 4px 0px rgba(0,0,0,0.2)");
       }
       else{
           setColor("none");
           setFontColor("white");
           let x = document.getElementsByClassName("nav-link")
           for(let item of x){
               item.style.color="white";
           }
           setShadow("none");
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return ( 
        <Navbar bg={color} expand="lg" sticky="top" id="navbar" style={{boxShadow:shadow}}>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src="/images/common/logo.png" width="100" height="20"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" >Home</Nav.Link>
                    <NavDropdown     title="Our services" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  href="#about">About us</Nav.Link>
                    <Nav.Link   href="#reviews">Reviews</Nav.Link>
                    <Nav.Link   href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Header;