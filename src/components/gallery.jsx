import React, { Component } from "react";
import ReactCompareImage from "react-compare-image";
class Gallery extends Component {
    render() {
        const before = require("../images/before2.webp").default;
        const after = require("../images/after2.webp").default;
        const before1 = require("../images/before3.jpg").default;
        const after1 = require("../images/after3.jpg").default;
        const before2 = require("../images/before10.jpg").default;
        const after2 = require("../images/after10.jpg").default;
        return (
            <>
                <div className="py-12 bg-[#bdbdbd] bg-opacity-20 sm:py-16 lg:py-20 bg-[radial-gradient(#00000029_1px,transparent_1px)] [background-size:16px_16px]">
                    <div className="text-center text-lg font-medium text-gray-600 pb-6 font-pj">
                        Gallery
                    </div>
                    <div className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj text-center">
                        Before & After Showcase
                    </div>
                    <div className="text-lg font-medium text-center text-gray-600 mb-10">
                        Before-and-after gallery demonstrating the exceptional results of our professional car detailing services.
                    </div>
                    <div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="md:container mx-auto sm:px-0 px-16 sm:w-2/3 lg:w-5/6 xl:w-3/4 2xl:w-3/5 mb-20">

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
                                    leftImage={before1}
                                    rightImage={after1}
                                />
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <ReactCompareImage
                                    alt="before/after pics"
                                    leftImage={before2}
                                    rightImage={after2}
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
