import { useCallback, useEffect, useState } from "react";
import { Navbar,Nav,Container ,NavDropdown} from "react-bootstrap";
import './SubHeader.css';
import { Arrow90degLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const SubHeader = () => {
    const nav = useNavigate();
    const changePage = useCallback((path)=>{
        nav(path);
        var elmnt = document.getElementById(path.split('#').pop());
        elmnt.scrollIntoView();
    },[]);
    return (  
        <Navbar bg={"light"} expand="lg" sticky="top" id="navbar">
        <Container fluid>
            <Navbar.Brand onClick={()=>{changePage("/")}}>
                <img src="/images/common/elixir_logo.png" width="50" height="40"/>
                &nbsp;&nbsp;Elixir
            </Navbar.Brand>
            <Nav className="ms-auto">
        <Nav.Link onClick={()=>{changePage("/")}}><Arrow90degLeft style={{fontWeight:"bold !important",fontSize:"1.5rem"}}/></Nav.Link>
      </Nav>
        </Container>
        </Navbar>
    );
}
 
export default SubHeader;