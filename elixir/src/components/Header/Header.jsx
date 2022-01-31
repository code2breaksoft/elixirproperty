import { useCallback, useEffect, useState } from "react";
import { Navbar,Nav,Container ,NavDropdown,Button} from "react-bootstrap";
import './Header.css';
import { List } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import logo from "../../images/common/elixir_logo.png"
import { useLocation } from "react-router-dom";
const Header = ({home}) => {
    const location = useLocation();
    const [drop,setDrop] = useState(false);
    const nav = useNavigate();
    const changePage = useCallback((path)=>{
        nav(path);
        var elmnt = document.getElementById(path.split('#').pop());
        elmnt.scrollIntoView();
    },[]);
    const changePageH = useCallback((path)=>{
        var elmnt = document.getElementById(path.split('#').pop());
        elmnt.scrollIntoView();
    },[]);
    const toggle = ()=>{
        setDrop(false);
    }
    const [open,setOpen] = useState(false);
    useEffect(()=>{
        if(!drop){
            setOpen(false);
        }
        else{
            setOpen(true);
        }
    },[location])

    return ( 
        <>
                    <Navbar bg={"light"} expand="lg" id="navbar" sticky="top" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand onClick={()=>{changePage("/#home")}} style={{cursor: "all-scroll"}}>
                    <img style={{cursor: "all-scroll"}} src={logo} width="50" height="40"/>
                    &nbsp;&nbsp;Elixir Property Inspect
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"><List style={{color:"white"}}/></Navbar.Toggle>
                <Navbar.Collapse >
                <Nav className="ms-auto">
                    <Nav.Link className="under" eventKey="0" onClick={()=>{changePageH("home")}} >HOME</Nav.Link>
                    <Nav.Link className="under" eventKey="1" onClick={()=>{changePageH("about")}}>ABOUT US</Nav.Link>
                    <NavDropdown onSelect={() => null} show={open} onClick={()=>setOpen(!open)} title="OUR SERVICES" id="basic-nav-dropdown">
                            <NavDropdown.Item eventKey="2"  onClick={()=>{changePage("/services/property-handover-inspection");setDrop(false);}}>Property Handover Inspection
                    </NavDropdown.Item>
                            <NavDropdown.Item   eventKey="3"  onClick={()=>{changePage("/services/property-resale-inpection");setDrop(false);}}>Property Resale Inspection
                    </NavDropdown.Item>
                            <NavDropdown.Item   eventKey="4"  onClick={()=>{changePage("/services/11-month-defect-liablity-inspection");setDrop(false);}} >11 Month-Defect Liability Inspection
                    </NavDropdown.Item>
                            <NavDropdown.Item  eventKey="5"  onClick={()=>{changePage("/services/property-move-in-out-inspection");setDrop(false);}}>Property Move In/Out Inspection
                    </NavDropdown.Item>
                            </NavDropdown>                    
                    <Nav.Link className="under" eventKey="6" onClick={()=>{changePageH("tools")}}>TOOLS</Nav.Link>
                    <Nav.Link className="under" eventKey="7" onClick={()=>{changePage("/inspection-scope")}}>INSPECTION SCOPE</Nav.Link>
                    <Nav.Link className="under" eventKey="8" onClick={()=>{changePageH("contact")}}>CONTACT&nbsp;&nbsp;</Nav.Link>
                    <Button variant="primary" >Sample report</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
     );
}
 
export default Header;