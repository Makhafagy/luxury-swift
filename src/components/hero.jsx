import React from "react"
import Carousel1 from "../images/carousel-1.jpg"
import Carousel2 from "../images/carousel-2.jpg"
import Carousel3 from "../images/carousel-3.jpg"
import OwlCarousel from "react-owl-carousel"
import { Button } from "@mui/material"
import styled from "@emotion/styled"

const BookButtonStyle = styled(Button)`
  color: #000000;
  
  background: #cecece;
  white-space: nowrap;
  &:hover {
    background: #bbbbbb;
  }
  @media (max-width:550px) {
    font-size: 9pt !important;
    padding: 4pt 8pt 4pt 8pt;
  }
`
const HeroCarousel = () => {
  return (
    <>
      <div className="carousel">
        <div className="container-fluid">
          <OwlCarousel
            animateIn="fadeIn"
            animateOut="fadeOut"
            className="owl-carousel"
            loop
            nav
            smartSpeed={300}
            autoplay
            items={1}
            dots={false}
            navContainerClass="owl-nav"
            navClass={["owl-prev", "owl-next"]}
            navText={[
              '<i class="fa fa-angle-left" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right" aria-hidden="true"></i>',
              "prev",
              "next",
            ]}
          >
            <div className="carousel-item">
              <div className="carousel-img">
                <img src={Carousel1} alt="carousel_car" />
              </div>
              <div className="carousel-text">
                <h3>Washing & Detailing</h3>
                <h1>Keep your Car Newer</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac
                </p>
                <BookButtonStyle variant="contained" href="">Explore More</BookButtonStyle>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src={Carousel2} alt="carousel_car" />
              </div>
              <div className="carousel-text">
                <h3>Washing & Detailing</h3>
                <h1>Quality service for you</h1>
                <p>
                  Morbi sagittis turpis id suscipit feugiat. Suspendisse eu
                  augue urna. Morbi sagittis orci sodales
                </p>
                <BookButtonStyle variant="contained" href="">Explore More</BookButtonStyle>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src={Carousel3} alt="carousel_car" />
              </div>
              <div className="carousel-text">
                <h3>Washing & Detailing</h3>
                <h1>Exterior & Interior Washing</h1>
                <p>
                  Sed ultrices, est eget feugiat accumsan, dui nibh egestas
                  tortor, ut rhoncus nibh ligula euismod quam
                </p>
                <BookButtonStyle variant="contained" href="">
                  Explore More
                </BookButtonStyle>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  )
}

export default HeroCarousel
