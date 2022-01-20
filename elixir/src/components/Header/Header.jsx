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
    const [navOpen,setNavOpen] = useState(false);
    const [scroll,setScroll] = useState(false);
    const nav = useNavigate();
    const changeNavbarColor = () =>{
        if(home){
            if(window.scrollY >= 20){
                setColor("light");
                setFontColor("#f85359");
                setShadow("0px 2px 4px 0px rgba(0,0,0,0.2)");
                setLogo("var(--fColor)");
                setScroll(true);
           }
           else{
            if(navOpen){
                setColor("light");
                setFontColor("var(--fColor)");
                setShadow("0px 2px 4px 0px rgba(0,0,0,0.2)");
                setLogo("var(--fColor)")
            }
            else{
                if(window.innerWidth<786){
                    setFontColor("var(--fColor)");
                   }
                   else{
                    setFontColor("white");
                   }
                   setLogo("white");
                    setColor("none");
                    setShadow("none");
                    setScroll(false);
            }
           }
        }
    };
    useEffect(()=>{

        if(!home){
            setColor("light");
            setFontColor("#f85359");
            setShadow("0px 2px 4px 0px rgba(0,0,0,0.2)");
        }
    },[]);
    const changePage = useCallback((path)=>{
        nav(path);
    },[]);
    window.addEventListener('scroll', changeNavbarColor);
    const openNav = ()=>{
        if(!scroll){
            if(!navOpen){
                setColor("light");
                setFontColor("var(--fColor)");
                setShadow("0px 2px 4px 0px rgba(0,0,0,0.2)");
                setNavOpen(true);
                setLogo("var(--fColor)")
            }
            else{
                setColor("none");
                setFontColor("white");
                setShadow("none");
                setLogo("white")
                setNavOpen(false);
            }
        }
    }
    return ( 
        <Navbar bg={color} expand="lg" sticky="top" id="navbar" style={{boxShadow:shadow}}>
            <Container fluid>
                <Navbar.Brand onClick={()=>{changePage("/")}} style={{color:logo,fontWeight:"bold"}}>
                    <img src="/images/common/elixir_logo.png" width="50" height="40"/>
                    &nbsp;&nbsp;Elixir
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={openNav}><List style={{color:"white"}}/></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll drop">
                <Nav className="ms-auto drop" >
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