import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import About from "./about/about";
import Achievements from "./achievements/achievements";
import Book from "./book/book";
import Hero from "./Hero/Hero";
import Reviews from "./reviews/reviews";
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
            <Container fluid>
                <About/>
            </Container>
            <Container fluid>
            <Achievements/>
            </Container>
            <Reviews/>
            <Footer/>
        </>
     );
}
 
export default Home;