import React from "react";
import { Button } from "@mui/material";
import { TawkContext } from "../providers";


const Packages = () => {
  const { tawkMessenger } = React.useContext(TawkContext);
  return (
    <>
      <div className="text-center text-2xl uppercase mb-12 md:mb-5 text-gray-600">
        Packages
      </div>
      <div className="text-5xl text-center uppercase mb-8 md:text-3xl">
        our packages
      </div>
      <div className="text-lg text-center text-gray-500 mb-12 mx-6 md:mx-3">
        Elevate your car's look and protection with our ceramic coating packages, ensuring long-lasting shine and defense against the elements.
      </div>

      <div className="container-full px-5 md:px-3">
        <div className="flex flex-wrap -mx-3">
          <div className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto px-3 mb-6">
            <div className="relative p-10 rounded-lg border border-yellow-600 shadow-md bg-white">
              <div className="text-xl font-medium pb-2 flex items-center">
                <i className="mr-2 bi bi-circle-half" />
                Essential Daily Detail
              </div>
              <div className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </div>
              <div className="text-4xl mb-4">
                $90 <span className="text-base text-gray-500">/ All Sizes</span>
              </div>
              <ItemArray text={["Full interior vacuum."]} />
              <ItemArray text={["Full soft brush wipe down"]} />
              <ItemArray text={["Compartment Restoration"]} />
              <ItemArray text={["Door Panel Restoration"]} />
              <ItemArray text={["Invisible interior glass"]} />
              <ItemArray text={["Dashboard Restoration"]} />
              <ItemArray text={["Floor Mats Restoration"]} />
              <ItemArrayX text={["Advanced Steam Cleaning"]} />
              <ItemArrayX text={["Full Seat and Carpet Extraction"]} />
              <ItemArrayX text={["UV Protection"]} />
              <ItemArrayX text={["Carpet Salt Stain Removal"]} />
              <ItemArrayX text={["Hand Wash"]} />
              <ItemArrayX text={["Pre-rinse"]} />
              <ItemArrayX text={["Wheel Rim and Tire Cleaner"]} />
              <ItemArrayX text={["Full Exterior Wash and Dry"]} />
              <ItemArrayX text={["Full Salt Stain Removal"]} />
              <ItemArrayX text={["Full Black Finish on all appliances"]} />
              <ItemArrayX text={["Full UV Protection"]} />
              <ItemArrayX text={["Salt Protection on Carpets"]} />
              <ItemArrayX text={["Full Exterior Detail"]} />
              <ItemArrayX text={["Invisible glass"]} />
              <ItemArrayX text={["Clay Bar Restoration"]} />
              <ItemArrayX text={["Complementary Cloth and ait Freshener"]} />
              <div className="text-center py-4">
                <Button
                  onClick={() => {
                    tawkMessenger.toggle();
                  }}
                  variant="contained"
                  className="bg-[#e9e8e8] text-black w-3/4 hover:bg-[#bbbbbb]"
                >
                  Book Now
                </Button>
              </div>
              <div className="text-center text-base text-gray-500">
                $110 for 7 seater
              </div>
            </div>
          </div>
          <div className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto px-3 mb-6">
          <div className="relative p-10 rounded-lg shadow-md bg-slate-700 text-white">
              <div className="absolute top-0 right-0 mt-0 mr-7 px-4 py-2 bg-[#e9e8e8] text-black font-semibold rounded-b-lg">
                Best Deal
              </div>
              <div className="text-xl font-medium pb-2 flex items-center">
                <i className="mr-2 bi bi-circle-half" />
                Elite Daily Detail
              </div>
              <div className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </div>
              <div className="text-4xl mb-4">
                $140 <span className="text-base text-gray-400">/ Starting</span>
              </div>
              <ItemArrayB text={["Full interior vacuum."]} />
              <ItemArrayB text={["Full soft brush wipe down"]} />
              <ItemArrayB text={["Compartment Restoration"]} />
              <ItemArrayB text={["Door Panel Restoration"]} />
              <ItemArrayB text={["Invisible interior glass"]} />
              <ItemArrayB text={["Dashboard Restoration"]} />
              <ItemArrayB text={["Floor Mats Restoration"]} />
              <ItemArrayB text={["Advanced Steam Cleaning"]} />
              <ItemArrayB text={["Full Seat and Carpet Extraction"]} />
              <ItemArrayB text={["UV Protection"]} />
              <ItemArrayB text={["Carpet Salt Stain Removal"]} />
              <ItemArrayB text={["Hand Wash"]} />
              <ItemArrayB text={["Pre-rinse"]} />
              <ItemArrayB text={["Wheel Rim and Tire Cleaner"]} />
              <ItemArrayB text={["Full Exterior Wash and Dry"]} />
              <ItemArrayBX text={["Full Salt Stain Removal"]} />
              <ItemArrayBX text={["Full Black Finish on all appliances"]} />
              <ItemArrayBX text={["Full UV Protection"]} />
              <ItemArrayBX text={["Salt Protection on Carpets"]} />
              <ItemArrayBX text={["Full Exterior Detail"]} />
              <ItemArrayBX text={["Invisible glass"]} />
              <ItemArrayBX text={["Clay Bar Restoration"]} />
              <ItemArrayBX text={["Complementary Cloth and ait Freshener"]} />
              <div className="text-center py-4">
                <Button
                  onClick={() => {
                    tawkMessenger.toggle();
                  }}
                  variant="contained"
                  className="bg-[#cccbcb] text-black w-3/4 hover:bg-[#bbbbbb]"
                >
                  Book Now
                </Button>
              </div>
              <div className="text-center text-base text-gray-300">
                $160 for 7 seater
              </div>
            </div>
          </div>
          <div className="w-4/5 sm:w-2/3 lg:w-1/3 mx-auto px-3 mb-6">
          <div className="relative p-10 rounded-lg border border-slate-700 shadow-md bg-white">
              <div className="text-xl font-medium pb-2 flex items-center">
                <i className="mr-2 bi bi-circle-half" />
                Supreme Daily Detail
              </div>
              <div className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </div>
              <div className="text-4xl mb-4">
                $190 <span className="text-base text-gray-400">/ Starting</span>
              </div>
              <ItemArray text={["Full interior vacuum."]} />
              <ItemArray text={["Full soft brush wipe down"]} />
              <ItemArray text={["Compartment Restoration"]} />
              <ItemArray text={["Door Panel Restoration"]} />
              <ItemArray text={["Invisible interior glass"]} />
              <ItemArray text={["Dashboard Restoration"]} />
              <ItemArray text={["Floor Mats Restoration"]} />
              <ItemArray text={["Advanced Steam Cleaning"]} />
              <ItemArray text={["Full Seat and Carpet Extraction"]} />
              <ItemArray text={["UV Protection"]} />
              <ItemArray text={["Carpet Salt Stain Removal"]} />
              <ItemArray text={["Hand Wash"]} />
              <ItemArray text={["Pre-rinse"]} />
              <ItemArray text={["Wheel Rim and Tire Cleaner"]} />
              <ItemArray text={["Full Exterior Wash and Dry"]} />
              <ItemArray text={["Full Salt Stain Removal"]} />
              <ItemArray text={["Full Black Finish on all appliances"]} />
              <ItemArray text={["Full UV Protection"]} />
              <ItemArray text={["Salt Protection on Carpets"]} />
              <ItemArray text={["Full Exterior Detail"]} />
              <ItemArray text={["Invisible glass"]} />
              <ItemArray text={["Clay Bar Restoration"]} />
              <ItemArray text={["Complementary Cloth and ait Freshener"]} />
              <div className="text-center py-4">
                <Button
                  onClick={() => {
                    tawkMessenger.toggle();
                  }}
                  variant="contained"
                  className="bg-[#e9e8e8] text-black w-3/4 hover:bg-[#bbbbbb]"
                >
                  Book Now
                </Button>
              </div>
              <div className="text-center text-base text-gray-500">
                $210 for 7 seater
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 xl:w-1/4 px-3 mb-6">
            <div className="relative p-10 rounded-lg border border-yellow-600 shadow-md bg-white">
              <div className="text-xl font-medium pb-2 flex items-center">
                <i className="mr-2 bi bi-circle-half" />
                Deluxe Package
              </div>
              <div className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </div>
              <div className="text-4xl mb-4">
                $269 <span className="text-base text-gray-500">/ Starting</span>
              </div>
              <ItemArray text={["Full interior vacuum."]} />
              <ItemArray text={["Full soft brush wipe down"]} />
              <ItemArray text={["Compartment Restoration"]} />
              <ItemArray text={["Door Panel Restoration"]} />
              <ItemArray text={["Invisible interior glass"]} />
              <ItemArray text={["Dashboard Restoration"]} />
              <ItemArray text={["Floor Mats Restoration"]} />
              <ItemArray text={["Advanced Steam Cleaning"]} />
              <ItemArray text={["Full Seat and Carpet Extraction"]} />
              <ItemArray text={["UV Protection"]} />
              <ItemArray text={["Carpet Salt Stain Removal"]} />
              <ItemArray text={["Hand Wash"]} />
              <ItemArray text={["Pre-rinse"]} />
              <ItemArray text={["Wheel Rim and Tire Cleaner"]} />
              <ItemArray text={["Full Exterior Wash and Dry"]} />
              <ItemArray text={["Full Salt Stain Removal"]} />
              <ItemArray text={["Full Black Finish on all appliances"]} />
              <ItemArray text={["Full UV Protection"]} />
              <ItemArray text={["Salt Protection on Carpets"]} />
              <ItemArray text={["Full Exterior Detail"]} />
              <ItemArray text={["Invisible glass"]} />
              <ItemArray text={["Clay Bar Restoration"]} />
              <ItemArray text={["Complementary Cloth and ait Freshener"]} />
              <div className="text-center py-4">
                <Button
                  onClick={() => {
                    tawkMessenger.toggle();
                  }}
                  variant="contained"
                  className="bg-yellow-600 text-black w-3/4 hover:bg-yellow-700"
                >
                  Book Now
                </Button>
              </div>
              <div className="text-center text-base text-gray-500">
                $299 for 7 seater
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Packages;

const ItemArray = ({ text }) => {
  return (
    <>
      {Array.isArray(text) && text.map((v, i) => (
        <div key={i} className="flex items-start pb-2">
          <i className="text-lg mr-4 bi bi-bookmark-check-fill" />
          {v}
        </div>
      ))}
    </>
  );
};

const ItemArrayX = ({ text }) => {
  return (
    <>
      {Array.isArray(text) && text.map((v, i) => (
        <div key={i} className="flex items-start pb-2 line-through text-gray-400">
          <i className="text-lg mr-4 bi bi-bookmark-x-fill" />
          {v}
        </div>
      ))}
    </>
  );
};

const ItemArrayB = ({ text }) => {
  return (
    <>
      {Array.isArray(text) && text.map((v, i) => (
        <div key={i} className="flex items-start pb-2 text-white">
          <i className="text-lg mr-4 bi bi-bookmark-check-fill" />
          {v}
        </div>
      ))}
    </>
  );
};

const ItemArrayBX = ({ text }) => {
  return (
    <>
      {Array.isArray(text) && text.map((v, i) => (
        <div key={i} className="flex items-start pb-2 line-through text-gray-500">
          <i className="text-lg mr-4 bi bi-bookmark-x-fill" />
          {v}
        </div>
      ))}
    </>
  );
};
