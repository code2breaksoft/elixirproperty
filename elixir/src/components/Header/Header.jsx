import { useCallback, useState } from "react";
import { Navbar,Nav,Container ,NavDropdown,Button} from "react-bootstrap";
import './Header.css';
import { List } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import logo from "../../images/common/elixir_logo.png"
const Header = ({home}) => {
    const nav = useNavigate();
    const changePage = useCallback((path)=>{
        nav(path);
        var elmnt = document.getElementById(path.split('#').pop());
        elmnt.scrollIntoView();
    },[]);
    return ( 
        <>
                    <Navbar bg={"light"} expand="lg" id="navbar" sticky="top" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand onClick={()=>{changePage("/#home")}} style={{cursor: "all-scroll"}}>
                    <img style={{cursor: "all-scroll"}} src={logo} width="50" height="40"/>
                    &nbsp;&nbsp;Elixir Property Inspect
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"><List style={{color:"white"}}/></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto">
                    <Nav.Link className="under" eventKey="0" onClick={()=>{changePage("/#home")}} >HOME</Nav.Link>
                    <Nav.Link className="under" eventKey="1" onClick={()=>{changePage("/#about")}}>ABOUT US</Nav.Link>
                    <NavDropdown title="OUR SERVICES" id="basic-nav-dropdown">
          <NavDropdown.Item  eventKey="2"  onClick={()=>{changePage("/services/property-handover-inspection")}}>Property Handover Inspection
</NavDropdown.Item>
          <NavDropdown.Item  eventKey="3"  onClick={()=>{changePage("/services/property-resale-inpection")}}>Property Resale Inspection
</NavDropdown.Item>
          <NavDropdown.Item  eventKey="4"  onClick={()=>{changePage("/services/11-month-defect-liablity-inspection")}} >11 Month-Defect Liability Inspection
</NavDropdown.Item>
          <NavDropdown.Item  eventKey="5"  onClick={()=>{changePage("/services/property-move-in-out-inspection")}}>Property move in/out inspection
</NavDropdown.Item>
        </NavDropdown>                    
                    <Nav.Link className="under" eventKey="6" onClick={()=>{changePage("/#tools")}}>TOOLS</Nav.Link>
                    <Nav.Link className="under" eventKey="7" onClick={()=>{changePage("/inspection-scope")}}>INSPECTION SCOPE</Nav.Link>
                    <Nav.Link className="under" eventKey="8" onClick={()=>{changePage("/#contact")}}>CONTACT&nbsp;&nbsp;</Nav.Link>
                    <Button variant="primary" >Sample report</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
     );
}
 
export default Header;