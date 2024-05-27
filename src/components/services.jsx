import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Icon1 from '../images/headlight.png';
import Icon2 from '../images/car.png';
import Icon3 from '../images/car-wash.png';
import Icon4 from '../images/ceramic-coating.png';
import MainImage from '../images/ceramic-coating.png';


const IndexPage = () => {
  const services = [
    {
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
    },
    {
      title: 'Service 2',
      description: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
      title: 'Service 3',
      description: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
    },
    {
      title: 'Service 4',
      description: 'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora.',
    },
  ];

  const icons = [Icon1, Icon2, Icon3, Icon4];

  return (
    <div className="container mx-auto p-4">
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="flex justify-center">
          <StaticImage
            src={MainImage}
            alt="Service"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center p-4">
          <h2 className="text-2xl font-bold mb-2">Our Service</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center p-4 border rounded shadow">
            <div className="mb-2">
              <img src={icons[index]} alt={`${service.title} icon`} className="w-12 h-12"/>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
