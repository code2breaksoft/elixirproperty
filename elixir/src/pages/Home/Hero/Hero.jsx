import { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import './Hero.css';
const Hero = () => {
    const [imgA,setimgA] = useState("/images/hero/h3.jpg");
    const [imgB,setimgB] = useState("/images/hero/h2.jpg");

    return ( 
        <Carousel id="hero-wrapper">
                        <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={imgA}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1>We see beyond visual inspection</h1>
                <p>UAE's most trusted Property Snagging and maintenance services provider.</p>
                <Button variant="primary" size="lg">Enquire now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item id="r" >
                <img
                className="d-block w-100"
                src={imgB}
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>The UAE's leading 
                              snagging
                              company.</h1>
                <p>Best snagging, inspection & maintenance services in UAE</p>
                <Button variant="primary" size="lg">Enquire now</Button>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
     );
}
 
export default Hero;