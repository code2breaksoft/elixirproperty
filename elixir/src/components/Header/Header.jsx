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
                setFontColor("var(--fColor)");
                setShadow("0px 2px 4px 0px rgba(0,0,0,0.2)");
                document.getElementById('basic-nav-dropdown').style.color="var(--fColor)";
           }
           else{
               if(window.innerWidth>786){
                    setFontColor("white");
                    setColor("none");
                    setLogo("white");
                    document.getElementById('basic-nav-dropdown').style.color="white";
               }
               else{
                setColor("light");
               }
               setShadow("none");
           }
        }
    };
    useEffect(()=>{
        document.getElementById('basic-nav-dropdown').style.color="white";
        if(window.innerWidth<=786){
            setFontColor("var(--fColor)");
            setColor("light");
            setLogo("var(--fColor)")
            document.getElementById('basic-nav-dropdown').style.color="var(--fColor)";
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
                    &nbsp;&nbsp;Elixir
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"><List style={{color:"white"}}/></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link onClick={()=>{changePage("/#home")}} style={{color:fontColor}}>Home</Nav.Link>
                    <NavDropdown title="Our services" id="basic-nav-dropdown">
          <NavDropdown.Item  onClick={()=>{changePage("/services/property-handover-inspection")}}>Property Handover Inspection
</NavDropdown.Item>
          <NavDropdown.Item  onClick={()=>{changePage("/services/property-resale-inpection")}}>Property Resale Inspection
</NavDropdown.Item>
          <NavDropdown.Item  onClick={()=>{changePage("/services/11-month-defect-liablity-inspection")}} >11 Month-Defect Liability Inspection
</NavDropdown.Item>
          <NavDropdown.Item  onClick={()=>{changePage("/services/property-move-in-out-inspection")}}>Property move in/out inspection
</NavDropdown.Item>
        </NavDropdown>                    <Nav.Link  style={{color:fontColor}} onClick={()=>{changePage("/#tools")}}>Tools</Nav.Link>
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