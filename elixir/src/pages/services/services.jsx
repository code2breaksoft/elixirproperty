import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Snagging from "./snagging/snagging";
import Maintenence from "./maintenance/maintenence";
import Special from "./sepecial/special";
const Services = () => {
    return ( 
        <>
        <Header/>
        <Container>
            <Routes>
                <Route path="/snagging" element={<Snagging/>}></Route>
                <Route path="/maintenence" element={<Maintenence/>}></Route>
                <Route path="/specialized" element={<Special/>}></Route>
            </Routes>
        </Container>
        <Footer/>
        </>
     );
}
 
export default Services;