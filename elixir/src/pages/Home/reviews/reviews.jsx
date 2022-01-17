import { Row ,Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const data = [
    {
        name:"Amar",
        company:"Serena Casa Viva Client",
        comment:"Sahal and team were through with inspection and I am happy to recommend their services.",
    },
    {
        name:"Simon",
        company:"Emaar 52 42",
        comment:"The team inspected the moistures on the wall with thermal device ;which led to timely solving problem and on time delivery of my apartment",
    },
    {
        name:"Sameer",
        company:"Akoya Mimosa",
        comment:"The team was able to do the thorough inspection of my Townhouse and to my surprise it was found that,there was not float valve installed in water tank;I would never have been able to check it myself which would have cost be thousand in utility bills",
    },
    {
        name:"Yuvi",
        company:"Akoya Janusia",
        comment:"All the minute details were recorded and the finishing and cracks were noted;including rooftop inspection and inspection of the rooftop",
    },
    {
        name:"Bhatia",
        company:"Akoya Mimosa",
        comment:"The team was on time and waited for me ahead in the community centre and explained me the working of the water pump systems and educated me about the materials and systems.",
    },
    {
        name:"Adel",
        company:"Creekside",
        comment:"The team inspected my Duplex apartment and found many snags; I really happy with the services and definitely recommend the service",
    },
    {
        name:"Saif",
        company:"Zaya Hameni Tower",
        comment:"The team inspected all the floor and the report is upto the point and team is polite and also explained me through my doubts.",
    },
];
const Reviews = () => {
    return ( 
        <Container>
            <Row>
                <h2>Our Client Reviews</h2>
            </Row>
            <Row>
                <p>Listen to our clients</p>
            </Row>
            <Row>
                <Carousel responsive={responsive}>

                </Carousel>
            </Row>
        </Container>
     );
}
 
export default Reviews;