import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
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
        </>
     );
}
 
export default Home;