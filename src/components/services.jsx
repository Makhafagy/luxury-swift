import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Icon1 from '../images/headlight.webp';
import Icon2 from '../images/car.webp';
import Icon3 from '../images/car-wash.webp';
import Icon4 from '../images/ceramic-coating.webp';
import { motion } from 'framer-motion';
import ModalIndex from './bookingSys';

const IndexPage = () => {
  const services = [
    {
      title: 'Headlights Restoration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
    },
    {
      title: 'Paint Correction',
      description: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
      title: 'Premium Wax',
      description: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
    },
    {
      title: 'Ceramic Coating',
      description: 'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora.',
    },
  ];

  const icons = [Icon1, Icon2, Icon3, Icon4];

  return (
    <>
      <div className="text-lg text-gray-600 font-pj mb-10 text-center">
        Services
      </div>
      <div className="relative container mx-auto w-11/12 xl:w-9/12">


        {/* First Row */}
        <motion.div
          initial={{ opacity: 0, y:-10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8"
        >
          <div className="flex justify-center">
            <StaticImage
              src='../images/service-pic.webp'
              alt="Service"
              className="w-auto h-auto lg:max-w-96"
            />
          </div>
          <div className="flex flex-col justify-center p-4">
            <h2 className="text-2xl font-semibold mb-2">WHAT WE OFFER?</h2>
            <h2 className="text-2xl font-semibold mb-2">Your Car Deserves the Best - Expert Detailing Services.</h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam, Sed cursus ante dapibus diam.
            </p>
            <ModalIndex />
          </div>

        </motion.div>
        {/* Second Row */}
        <div
          className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, index) => (
            <motion.div initial={{ opacity: 0, x:60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.3 }} key={index} className="z-10 flex flex-col p-4 pt-14">
              <div className="mb-2">
                <img loading="lazy" src={icons[index]} alt={`${service.title} icon`} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
