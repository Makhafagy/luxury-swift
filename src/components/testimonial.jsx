import React from "react";
import {motion} from "framer-motion"
const Testimonial = () => {
  return (
    <section className="py-12 bg-[#bdbdbd] bg-opacity-20 sm:py-16 lg:py-20 bg-[radial-gradient(#00000029_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">Testimonial</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our Happy Clients</h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href="/"
              title=""
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              Write a Review
            </a>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
            </div>
          <motion.div
          initial={{ opacity: 0, y: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">{testimonial.quote}</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.image}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{testimonial.name}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    name: "Anna Garcia",
    role: "1 Day ago",
    image: "https://ui-avatars.com/api/?name=Anna+Garcia",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    name: "Miriam Jasim",
    role: "4 Days ago",
    image: `https://ui-avatars.com/api/?name=Miriam+Jasim`,
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    name: "Peter Ross",
    role: "10 Days ago",
    image: "https://ui-avatars.com/api/?name=Peter+Ross",
  },
];

export default Testimonial;
