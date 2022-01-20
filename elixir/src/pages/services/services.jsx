import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import Prop from "./snagging/prop/prop";
import "./snagging/snagging.css";
import MoveIn from "./snagging/movein/movein";
import SubHeader from "../../components/subHeader/subheader";

const Services = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    },[]);
    return ( 
        <>
        <SubHeader/>
        <Container>
            <Routes>
                <Route path="/property-handover-inspection" element={<Prop/>}></Route>
                <Route path="/property-resale-inpection" element={<Prop/>}></Route>
                <Route path="/11-month-defect-liablity-inspection" element={<Prop/>}></Route>
                <Route path="/property-move-in-out-inspection" element={<MoveIn/>}></Route>
            </Routes>
        </Container>
        <Footer/>
        </>
     );
}
 
export default Services;