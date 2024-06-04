import React, { Component } from "react";
import ReactCompareImage from "react-compare-image";

class Gallery extends Component {
    render() {
        const before = require("../images/Detailing-after.png").default;
        const after = require("../images/Detailing-before.png").default;

        return (
            <>
                <div className="py-12 bg-[#bdbdbd] bg-opacity-20 sm:py-16 lg:py-20 bg-[radial-gradient(#00000029_1px,transparent_1px)] [background-size:16px_16px]">
                    <div className="text-center text-uppercase text-gray-600 text-lg mb-10 font-medium">
                        Gallery
                    </div>
                    <div className="text-3xl font-bold text-center text-black mb-10">
                        Before & After Showcase
                    </div>
                    <div className="text-lg font-medium text-center text-gray-700 mb-10">
                        Before-and-after gallery demonstrating the exceptional results of our professional car detailing services.
                    </div>

                    <div className="md:container mx-auto sm:px-0 px-16 sm:w-2/3 lg:w-5/6 xl:w-3/4 2xl:w-3/5 mb-20">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <ReactCompareImage
                                    alt="before/after pics"
                                    leftImage={before}
                                    rightImage={after}
                                />
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <ReactCompareImage
                                    alt="before/after pics"
                                    leftImage={before}
                                    rightImage={after}
                                />
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <ReactCompareImage
                                    alt="before/after pics"
                                    leftImage={before}
                                    rightImage={after}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Gallery;
