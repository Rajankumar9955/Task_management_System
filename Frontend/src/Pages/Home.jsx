



import Carousel from 'react-bootstrap/Carousel';
import car1 from "../Images/car1.jpg";
import car2 from "../Images/car2.jpeg";
import car3 from "../Images/car3.jpg";
const Home=()=>{
    return(
        <>
       <div>
       <Carousel>
      <Carousel.Item>
        <img src={car1} alt="" className='cars'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={car2} alt="" className='cars'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={car3} alt="" className='cars' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
        
        </>
    )
}
export default Home;