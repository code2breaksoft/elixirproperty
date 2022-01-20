import { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import './Hero.css';
const Hero = () => {
    const [imgA,setimgA] = useState("/images/hero/slider-1.jpg");
    const [imgB,setimgB] = useState("/images/hero/slider-2.jpg");
    useEffect(()=>{
        if(window.innerWidth>786){
            document.getElementById("home").style.marginTop = "-10%";
        }
        else{
            document.getElementById("home").style.marginTop = "-50%";
            setimgA("/images/hero/2.jpg");
            setimgB("/images/hero/3.jpg");
        }
    },[]);
    return ( 
        <Carousel id="home">
            <Carousel.Item id="r" >
                <img
                className="d-block w-100"
                src={imgA}
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
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={imgB}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1>We see beyond visual inspection</h1>
                <p>UAE's most trusted Property Snagging and maintenance services provider.</p>
                <Button variant="primary" size="lg">Enquire now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
     );
}
 
export default Hero;