import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Hero from "./Hero/Hero";
import Services from "./services/services";

const Home = () => {
    return ( 
        <>
            <Header/>
            <Hero/>
            <Container>
                <Services/>
            </Container>
        </>
     );
}
 
export default Home;