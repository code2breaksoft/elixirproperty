import { useEffect, useState } from "react";
import { Navbar,Nav,Container ,NavDropdown} from "react-bootstrap";
import './Header.css';
import { List } from "react-bootstrap-icons";
const Header = () => {
    const [color,setColor] = useState("none");
    const [fontColor,setFontColor] = useState("white");
    const [shadow,setShadow] = useState("none");
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
            setColor("light");
            setFontColor("#f85359");
            setShadow("0px 2px 4px 0px rgba(0,0,0,0.2)");
       }
       else{
           if(window.innerWidth>786){
                setFontColor("white");
                setColor("none");
           }
           else{
            setColor("light");
           }
           setShadow("none");
       }
    };
    useEffect(()=>{
        if(window.innerWidth<=786){
            setFontColor("#f85359");
            setColor("light");
        }
    },[]);
    window.addEventListener('scroll', changeNavbarColor);
    return ( 
        <Navbar bg={color} expand="lg" sticky="top" id="navbar" style={{boxShadow:shadow}}>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src="/images/common/logo.png" width="100" height="20"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"><List style={{color:"white"}}/></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link href="#hero-wrapper" style={{color:fontColor}}>Home</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} href="#services">Our services</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} href="#about">About us</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} href="#reviews">Reviews</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Header;