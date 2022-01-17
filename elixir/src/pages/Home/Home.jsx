import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import About from "./about/about";
import Achievements from "./achievements/achievements";
import Book from "./book/book";
import Hero from "./Hero/Hero";
import Services from "./services/services";
import Snag from "./snag/snag";
import Tools from "./Tools/Tools";

const Home = () => {
    return ( 
        <>
            <Header/>
            <Hero/>
            <Snag/>
            <Container>
                <Tools/>
                <Services/>
            </Container>
            <Book/>
            <Container>
                <About/>
            </Container>
            <Achievements/>
        </>
     );
}
 
export default Home;