import React from "react"
import { Carousel, ConfigProvider } from "antd"
import "antd/dist/reset.css" // Ensure you have antd styles
import Carousel1 from "../images/carousel-1.webp"
import Carousel2 from "../images/carousel-2.webp"
import Carousel3 from "../images/carousel-3.webp"
import { motion } from "framer-motion"

const carouselItems = [
  {
    image: Carousel3,
    heading: "Premium Detailing Services",
    subheading: "Washing & Detailing",
    text: "Bring back that showroom shine with our top-notch interior and exterior detailing.",
    buttonText: "View Our Packages",
    buttonLink: "#Packages",
  },
  {
    image: Carousel1,
    heading: "See the Transformation",
    subheading: "Before & After Results",
    text: "Take a look at how we’ve transformed vehicles with care and precision.",
    buttonText: "See the Difference",
    buttonLink: "#Gallery",
  },
  {
    image: Carousel2,
    heading: "Here for You 24/7",
    subheading: "24/7 Service, Anytime",
    text: "We’re just a message away — available around the clock to assist you.",
    buttonText: "Get in Touch",
    buttonLink: "#Contact",
  },
]

const HeroCarousel = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 23,
            arrowOffset: 15,
            dotActiveWidth: 33,
            dotHeight: 5,
          },
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="relative w-full mb-12"
      >
        <Carousel
          className="p-0 mx-auto w-[95%] lg:w-10/12 xl:w-9/12 2xl:w-8/12 lg:mt-12 sm:mt-7 mt-4"
          arrows
          fade
          autoplay
          autoplaySpeed={3000}
          speed={1000}
          infinite
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center flex-col"
            >
              <div className="relative w-full h-full text-right overflow-hidden mb-auto rounded-[18px]">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={`carousel_${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center z-20 p-4 bg-black bg-opacity-30">
                <h3 className="text-red-600 text-md sm:text-lg font-bold uppercase tracking-wider mb-2">
                  {item.heading}
                </h3>
                <h1 className="text-white text-2xl sm:text-3xl md:text-5xl xl:text-7xl font-bold capitalize mb-3">
                  {item.subheading}
                </h1>
                <p className="text-white text-base sm:text-lg lg:text-xl max-w-md lg:max-w-lg mb-1 sm:mb-10">
                  {item.text}
                </p>
                <a
                  href={item.buttonLink}
                  className="inline-flex items-center justify-center px-2 py-1 sm:px-3 overflow-hidden sm:text-base text-sm font-medium text-gray-800 hover:text-gray-800 rounded bg-zinc-300 hover:bg-zinc-400 duration-300 transition"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </ConfigProvider>
  )
}

export default HeroCarousel
