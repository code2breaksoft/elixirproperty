import { useCallback, useEffect, useState } from "react";
import { Navbar,Nav,Container ,NavDropdown, Button,Row,Col} from "react-bootstrap";
import './SubHeader.css';
import { Arrow90degLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import FormModal from "../modal/modal";
import React from "react";
const SubHeader = () => {
    const nav = useNavigate();
    const changePage = useCallback((path)=>{
        nav(path);
        var elmnt = document.getElementById(path.split('#').pop());
        elmnt.scrollIntoView();
    },[]);
    const [showM,setShow] = React.useState(false);
    const showModal = ()=>{
        setShow(true);
    }
    const hideModal = ()=>{
        setShow(false);
    }
    return (  
        <>
            <FormModal show={showM} handleClose={hideModal}/>
                    <Navbar bg={"light"} expand="lg" sticky="top" id="navbarSub">
        <Container fluid>
            <Navbar.Brand onClick={()=>{changePage("/")}}>
                <img src="/images/common/elixir_logo.png" width="50" height="40"/>
                &nbsp;&nbsp;Elixir
            </Navbar.Brand>
            <Nav className="ms-auto">
                <Row>
                    <Col xs={9}>
                    <Button variant="primary" onClick={showModal}>Get free quote</Button>

                    </Col>
                    <Col xs={3}>
                    <Nav.Link onClick={()=>{changePage("/")}}><Arrow90degLeft style={{fontWeight:"bold !important",fontSize:"1.5rem"}}/></Nav.Link>

                    </Col>
                </Row>
            </Nav>
        </Container>
        </Navbar>
        </>
    );
}
 
export default SubHeader;