import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slide1.jpg";
import Slide2 from "../../assets/img/carousal/slide2.jpg";
import Slide3 from "../../assets/img/carousal/slide3.jpg";
import Slide4 from "../../assets/img/carousal/slide4.jpg";
import Slide5 from "../../assets/img/carousal/slide5.jpg";
import Slide6 from "../../assets/img/carousal/slide6.jpg";
import Slide7 from "../../assets/img/carousal/slide7.jpg";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500}       pause={false}>
      
          <Carousel.Item > 
              <div className="images">
                <img className="d-block w-90 h-50 custom-img" src={Slide1} alt="First slide" />
              </div>
            </Carousel.Item>

            <Carousel.Item > 
              <div className="images">
                <img className="d-block w-90 h-50 custom-img" src={Slide2} alt="First slide" />
              </div>
            </Carousel.Item>

            <Carousel.Item > 
              <div className="images">
                <img className="d-block w-90 h-50 custom-img" src={Slide3} alt="First slide" />
              </div>
            </Carousel.Item>

            <Carousel.Item > 
              <div className="images">
                <img className="d-block w-90 h-50 custom-img" src={Slide4} alt="First slide" />
              </div>
            </Carousel.Item>

            <Carousel.Item > 
              <div className="images">
                <img className="d-block w-90 h-50 custom-img" src={Slide5} alt="First slide" />
              </div>
            </Carousel.Item>

            <Carousel.Item > 
              <div className="images">
                <img className="d-block w-90 h-50 custom-img" src={Slide6} alt="First slide" />
              </div>
            </Carousel.Item>

            <Carousel.Item > 
              <div className="images">
                <img className="d-block w-90 h-50 custom-img" src={Slide7} alt="First slide" />
              </div>
            </Carousel.Item>


       </Carousel>
      <ScrollDown />
    </div> 
  );
};

export default MyCarousal;