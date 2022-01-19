import { useCallback, useEffect, useState } from "react";
import { Navbar,Nav,Container ,NavDropdown} from "react-bootstrap";
import './Header.css';
import { List } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const Header = ({home}) => {
    const [color,setColor] = useState("none");
    const [fontColor,setFontColor] = useState("white");
    const [shadow,setShadow] = useState("none");
    const [basePath,setBasePath] = useState("");
    const [logo,setLogo] = useState("white");
    const nav = useNavigate();
    const changeNavbarColor = () =>{
        if(home){
            if(window.scrollY >= 80){
                setColor("light");
                setFontColor("#f85359");
                setShadow("0px 2px 4px 0px rgba(0,0,0,0.2)");
           }
           else{
               if(window.innerWidth>786){
                    setFontColor("white");
                    setColor("none");
                    setLogo("white");
               }
               else{
                setColor("light");
               }
               setShadow("none");
           }
        }
    };
    useEffect(()=>{
        if(window.innerWidth<=786){
            setFontColor("#f85359");
            setColor("light");
            setLogo("var(--fColor)")
        }
        if(!home){
            setColor("light");
            setFontColor("#f85359");
            setShadow("0px 2px 4px 0px rgba(0,0,0,0.2)");
        }
    },[]);
    const changePage = useCallback((path)=>{
        nav(path);
        var elmnt = document.getElementById(path.split('#').pop());
        elmnt.scrollIntoView();
    },[]);
    window.addEventListener('scroll', changeNavbarColor);
    return ( 
        <Navbar bg={color} expand="lg" sticky="top" id="navbar" style={{boxShadow:shadow}}>
            <Container fluid>
                <Navbar.Brand onClick={()=>{changePage("/")}} style={{color:logo,fontWeight:"bold"}}>
                    <img src="/images/common/elixir_logo.png" width="50" height="40"/>
                    &nbsp;&nbsp;Elixir Property Inspect
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"><List style={{color:"white"}}/></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link onClick={()=>{changePage("/")}} style={{color:fontColor}}>Home</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} onClick={()=>{changePage("/#services")}}>Our services</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} onClick={()=>{changePage("/#about")}}>About us</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} onClick={()=>{changePage("/#reviews")}}>Reviews</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} onClick={()=>{changePage("/#contact")}}>Contact</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} onClick={()=>{changePage("/faq")}}>Faq</Nav.Link>
                    <Nav.Link  style={{color:fontColor}} onClick={()=>{changePage("/blog")}}>Blog</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Header;