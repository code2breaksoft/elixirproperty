import Carousel from "react-multi-carousel";
import './Achievements.css';
import "react-multi-carousel/lib/styles.css";
const ItemCarousel = ({image})=>{
    return(
        <div>
            <img className="client-img" src={`/images/cioncs/${image}.png`}/>
        </div>
    );
}
const Achievements = () => {    
    const image = [1,2,3,4,6,10,11,12,13];
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return ( 
        <>
          <section id="ach-wrapper">
                <div id="ach-header">
                  <h2>Our Achievements</h2>
                   <p>We have proudly worked and consistently delivered high quality inspections in leadings communities and luxury properties; We act as Investor eyes and make sure the property is received in immaculate condition.</p>
                </div>
                <Carousel responsive={responsive}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={1500}
                      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                      dotListClass="custom-dot-list-style"
                      showDots={true}
                      centerMode={true}
                >
                {
                    image.map((item)=><ItemCarousel image={item}/>)
                }
                </Carousel>
          </section>
        </>
     );
}
 
export default Achievements;