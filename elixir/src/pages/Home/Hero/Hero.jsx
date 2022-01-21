import { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import './Hero.css';
import FormModal from '../../../components/modal/modal';
const Hero = () => {
    const [imgA,setimgA] = useState("/images/hero/c1.jpeg");
    const [imgB,setimgB] = useState("/images/hero/c3.jpeg");
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
            setMobView(true);
        }
    },[])
    return ( 
        <>
            <FormModal show={showM} handleClose={hideModal} />
        <Carousel id="hero-wrapper" fade controls={!mobView}>
                        <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={imgA}
                alt="Second slide"
                />
                <Carousel.Caption >
                <h1 class="animate__animated animate__bounceInLeft">We see beyond visual inspection</h1>
                <p class="animate__animated animate__bounceInRight">UAE's most trusted Property Snagging and maintenance services provider.</p>
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
                <h1 class="animate__animated animate__bounceInLeft">
                Best snagging & inspection services in UAE</h1>
                <p class="animate__animated animate__bounceInRight">Best snagging & inspection services in UAE</p>
                <Button  variant="primary" size="lg" onClick={showModal}>Enquire now</Button>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
            </>
     );
}
 
export default Hero;