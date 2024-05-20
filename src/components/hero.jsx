import React from "react";
import Carousel1 from '../images/carousel-1.jpg';
import Carousel2 from '../images/carousel-2.jpg';
import Carousel3 from '../images/carousel-3.jpg';
import OwlCarousel from 'react-owl-carousel';


const HeroCarousel = () => {
  return (
    <>
      <div className="carousel">
        <div className="container-fluid">
          <OwlCarousel
            className="owl-theme"
            loop
            nav
            margin={10}
            autoplay
            items={1}
          >
            <div className="carousel-item">
              <div className="carousel-img">
                <img src={Carousel1} alt="Image" />
              </div>
              <div className="carousel-text">
                <h3>Washing & Detailing</h3>
                <h1>Keep your Car Newer</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac
                </p>
                <a className="btn btn-custom" href="">
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src={Carousel2} alt="Image" />
              </div>
              <div className="carousel-text">
                <h3>Washing & Detailing</h3>
                <h1>Quality service for you</h1>
                <p>
                  Morbi sagittis turpis id suscipit feugiat. Suspendisse eu
                  augue urna. Morbi sagittis orci sodales
                </p>
                <a className="btn btn-custom" href="">
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src={Carousel3} alt="Image" />
              </div>
              <div className="carousel-text">
                <h3>Washing & Detailing</h3>
                <h1>Exterior & Interior Washing</h1>
                <p>
                  Sed ultrices, est eget feugiat accumsan, dui nibh egestas
                  tortor, ut rhoncus nibh ligula euismod quam
                </p>
                <a className="btn btn-custom" href="">
                  Explore More
                </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
