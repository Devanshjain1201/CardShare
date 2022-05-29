import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "../assets/slides/slide1.png";
import Slide2 from "../assets/slides/slide2.png";
import Slide3 from "../assets/slides/slide3.png";
import Slide4 from "../assets/slides/slide4.png";


function Home() {
  return (
    <div>
      <Carousel variant="dark" fade indicators={false} >
        <Carousel.Item>
          <img style={{Width:'100vh'}}
            className="d-block mx-auto"
            src={Slide3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src={Slide1}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src={Slide4}
            alt="Forth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
