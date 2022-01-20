import { useCallback, useEffect, useState } from "react";
import { Navbar,Nav,Container ,NavDropdown} from "react-bootstrap";
import './Header.css';
import { List } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const Header = ({home}) => {
    const nav = useNavigate();
    const changePage = useCallback((path)=>{
        nav(path);
        var elmnt = document.getElementById(path.split('#').pop());
        elmnt.scrollIntoView();
    },[]);
    return ( 
        <Navbar bg={"light"} expand="lg" id="navbar" sticky="top">
            <Container fluid>
                <Navbar.Brand onClick={()=>{changePage("/")}}>
                    <img src="/images/common/elixir_logo.png" width="50" height="40"/>
                    &nbsp;&nbsp;Elixir
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"><List style={{color:"white"}}/></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link onClick={()=>{changePage("/#home")}} >Home</Nav.Link>
                    <NavDropdown title="Our services" id="basic-nav-dropdown">
          <NavDropdown.Item  onClick={()=>{changePage("/services/property-handover-inspection")}}>Property Handover Inspection
</NavDropdown.Item>
          <NavDropdown.Item  onClick={()=>{changePage("/services/property-resale-inpection")}}>Property Resale Inspection
</NavDropdown.Item>
          <NavDropdown.Item  onClick={()=>{changePage("/services/11-month-defect-liablity-inspection")}} >11 Month-Defect Liability Inspection
</NavDropdown.Item>
          <NavDropdown.Item  onClick={()=>{changePage("/services/property-move-in-out-inspection")}}>Property move in/out inspection
</NavDropdown.Item>
        </NavDropdown>                    <Nav.Link   onClick={()=>{changePage("/#tools")}}>Tools</Nav.Link>
                    <Nav.Link  onClick={()=>{changePage("/#about")}}>About us</Nav.Link>
                    <Nav.Link   onClick={()=>{changePage("/#reviews")}}>Reviews</Nav.Link>
                    <Nav.Link   onClick={()=>{changePage("/#contact")}}>Contact</Nav.Link>
                    <Nav.Link   onClick={()=>{changePage("/faq")}}>Faq</Nav.Link>
                    <Nav.Link  onClick={()=>{changePage("/blog")}}>Blog</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Header;