import React from "react";
import { Carousel, ConfigProvider } from "antd";
import "antd/dist/reset.css"; // Ensure you have antd styles
import Carousel1 from "../images/carousel-1.jpg";
import Carousel2 from "../images/carousel-2.jpg";
import Carousel3 from "../images/carousel-3.jpg";

const carouselItems = [
    {
        image: Carousel1,
        heading: "Washing & Detailing",
        subheading: "Keep your Car Newer",
        text: "Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.",
        buttonText: "Explore More",
        buttonLink: "#About",
    },
    {
        image: Carousel2,
        heading: "Washing & Detailing",
        subheading: "Quality service for you",
        text: "Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna.",
        buttonText: "Explore Services",
        buttonLink: "#Service",
    },
    {
        image: Carousel3,
        heading: "Washing & Detailing",
        subheading: "Exterior & Interior Washing",
        text: "Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor.",
        buttonText: "Explore Packages",
        buttonLink: "#Packages",
    },
];

const HeroCarousel = () => {
    return (
        <ConfigProvider theme={{
            components: {
                Carousel: {
                    
                    arrowSize: 23,
                    arrowOffset: 15,
                    dotActiveWidth: 33,
                    dotHeight: 5,


                },
            },
        }}>
            <div className="relative w-full mb-12">
                <Carousel
                    className="p-0 mx-auto 2xl:w-[93%]"
                    arrows fade autoplay autoplaySpeed={3000} speed={1000} infinite>
                    {carouselItems.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-center flex-col">
                            <div className="relative w-full h-full text-right overflow-hidden mb-auto">
                                <img src={item.image} alt={`carousel_${index}`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center flex-col text-center z-20 p-4">
                                <h3 className="text-red-600 text-md sm:text-lg font-bold uppercase tracking-wider mb-2">{item.heading}</h3>
                                <h1 className="text-white text-2xl sm:text-3xl md:text-5xl xl:text-7xl font-bold capitalize mb-5">{item.subheading}</h1>
                                <p className="text-white text-base sm:text-lg lg:text-xl max-w-md lg:max-w-lg mb-3 sm:mb-10">{item.text}</p>
                                <a href={item.buttonLink} className="bg-gray-300 text-black font-medium sm:text-base py-1 px-3 sm:py-2 sm:px-4 rounded hover:bg-gray-400 hover:text-black duration-300 transition">
                                    {item.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </ConfigProvider>
    );
};

export default HeroCarousel;
