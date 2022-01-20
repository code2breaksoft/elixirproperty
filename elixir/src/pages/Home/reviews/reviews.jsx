import { Row ,Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./reviews.css";

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
        name:"Simon",
        company:"Emaar 52 42",
        comment:"The team inspected the moistures on the wall with thermal device ;which led to timely solving problem and on time delivery of my apartment",
    },
    {
        name:"Sameer",
        company:"Akoya Mimosa",
        comment:"The team was able to do the thorough inspection of my Townhouse and to my surprise it was found that,there was not float valve installed in water tank.",
    },
    {
        name:"Yuvi",
        company:"Akoya Janusia",
        comment:"All the minute details were recorded and the finishing and cracks were noted;including rooftop inspection and inspection of the rooftop",
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
const Item = ({data})=>{
    return(
        <div>
        <Container className="item-wrapper" >
            <Row>
                <p className="client-name">{data.name}</p>
            </Row>
            <Row>
                <p className="client-company">{data.company}</p>
            </Row>
            <Row>
                <p></p>
            </Row>
            <Row>
            <blockquote>
                {data.comment}
            </blockquote>
            </Row>
            <Row>
                <div className="divider"></div>
            </Row>
        </Container>
    </div>
    );
}
const Reviews = () => {
    return ( 
        <Container className="reviews-wrapper" id="reviews">
            <Row>
                <h2 id="client-review-h">Our Client Reviews</h2>
            </Row>
            <Row>
                <p className="reviews-header-description">Listen to our clients</p>
            </Row>
            <Row>
            <Carousel responsive={responsive}
                                  infinite={true}
                                  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                                  dotListClass="custom-dot-list-style"
                                  showDots={true}
            >
                    {
                        data.map((dataItem)=>
                            <Item data={dataItem}/>
                        )
                    }
                </Carousel>
            </Row>
        </Container>
     );
}
 
export default Reviews;