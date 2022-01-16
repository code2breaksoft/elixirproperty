import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Book from "./book/book";
import Hero from "./Hero/Hero";
import Services from "./services/services";
import Tools from "./Tools/Tools";

const Home = () => {
    return ( 
        <>
            <Header/>
            <Hero/>
            <Container>
                <Services/>
                <Tools/>
            </Container>
            <Book/>
        </>
     );
}
 
export default Home;