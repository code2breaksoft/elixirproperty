import { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import './Hero.css';
import FormModal from '../../../components/modal/modal';
import Hero1 from '../../../images/hero/c1.jpeg';
import Hero2 from '../../../images/hero/c3.jpeg';
import h3 from '../../../images/hero/h3.jpg';
import h2 from '../../../images/hero/h2.jpg';
const Hero = ({country}) => {
    const [imgA,setimgA] = useState(Hero1);
    const [imgB,setimgB] = useState(Hero2);
    const [showM,setShow] = useState(false);
    const showModal = ()=>{
        setShow(true);
    }
    const hideModal = ()=>{
        setShow(false);
    }
    const [mobView,setMobView] = useState(false);
    useEffect(()=>{
        if(window.innerWidth<786){
            setimgA(h2);
            setimgB(h3);
        }
    },[])
    return ( 
        <>
        <section id="home">
        <FormModal show={showM} handleClose={hideModal} countries={country} />
        <Carousel  fade controls={!mobView}>
                        <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={imgA}
                alt="Second slide"
                />
                <Carousel.Caption >
                <h1 class="animate__animated animate__bounceInLeft">We see beyond Visual Inspection</h1>
                <p class="animate__animated animate__bounceInRight">UAE's most trusted Property Snagging  services provider.</p>
                <Button variant="primary" size="lg"  onClick={showModal}>Enquire now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item id="r" >
                <img
                className="d-block w-100"
                src={imgB}
                alt="First slide"
                />
                <Carousel.Caption>
                <h2 class="animate__animated animate__bounceInLeft">
                Best Snagging & Inspection services in UAE</h2>
                <p class="animate__animated animate__bounceInRight">Best Snagging & Inspection services in UAE</p>
                <Button  variant="primary" size="lg" onClick={showModal}>Enquire now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </section>
            </>
     );
}
 
export default Hero;
