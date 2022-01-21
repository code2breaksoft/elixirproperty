import { useCallback, useEffect, useState } from "react";
import { Navbar,Nav,Container ,NavDropdown,Button} from "react-bootstrap";
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
        <Navbar bg={"light"} expand="lg" id="navbar" sticky="top" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand onClick={()=>{changePage("/")}}>
                    <img src="/images/common/elixir_logo.png" width="50" height="40"/>
                    &nbsp;&nbsp;Elixir
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"><List style={{color:"white"}}/></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link  eventKey="0" onClick={()=>{changePage("/#home")}} >Home</Nav.Link>
                    <Nav.Link  eventKey="1" onClick={()=>{changePage("/#about")}}>About us</Nav.Link>
                    <NavDropdown title="Our services" id="basic-nav-dropdown">
          <NavDropdown.Item  eventKey="2"  onClick={()=>{changePage("/services/property-handover-inspection")}}>Property Handover Inspection
</NavDropdown.Item>
          <NavDropdown.Item  eventKey="3"  onClick={()=>{changePage("/services/property-resale-inpection")}}>Property Resale Inspection
</NavDropdown.Item>
          <NavDropdown.Item  eventKey="4"  onClick={()=>{changePage("/services/11-month-defect-liablity-inspection")}} >11 Month-Defect Liability Inspection
</NavDropdown.Item>
          <NavDropdown.Item  eventKey="5"  onClick={()=>{changePage("/services/property-move-in-out-inspection")}}>Property move in/out inspection
</NavDropdown.Item>
        </NavDropdown>                    
                    <Nav.Link  eventKey="6" onClick={()=>{changePage("/#tools")}}>Tools</Nav.Link>
                    <Nav.Link  eventKey="7" onClick={()=>{changePage("/inspection-scope")}}>Inpection scope</Nav.Link>
                    <Nav.Link  eventKey="8" onClick={()=>{changePage("/#contact")}}>Contact&nbsp;&nbsp;</Nav.Link>
                    <Button variant="primary">Sample report</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Header;