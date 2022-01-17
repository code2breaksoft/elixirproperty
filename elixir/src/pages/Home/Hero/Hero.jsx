import { Button, Carousel } from "react-bootstrap";
import './Hero.css';
const Hero = () => {
    return ( 
        <Carousel id="hero-wrapper">
            <Carousel.Item id="r" >
                <img
                className="d-block w-100"
                src="/images/hero/slider-1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>The UAE's leading 
                              snagging & handover
                              company.</h1>
                <p>Best snagging, inspection & maintenance services in UAE</p>
                <Button variant="primary" size="lg">Enquire now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src="/images/hero/slider-2.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1>We see beyond visual inspection</h1>
                <p>UAE”s most trusted Property Snagging and maintenance services provider and to be investors and Tenants first choice for Property Services</p>
                <Button variant="primary" size="lg">Enquire now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
     );
}
 
export default Hero;