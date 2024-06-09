import React, { Component } from "react";
import ReactCompareImage from "react-compare-image";
import { motion } from "framer-motion";

class Gallery extends Component {
    render() {
        const before = require("../images/before2.webp").default;
        const after = require("../images/after2.webp").default;
        const before1 = require("../images/before3.webp").default;
        const after1 = require("../images/after3.webp").default;
        const before2 = require("../images/before10.webp").default;
        const after2 = require("../images/after10.webp").default;
        return (
            <>
                <div className="py-12 bg-[#bdbdbd] bg-opacity-20 sm:py-16 lg:py-20 bg-[radial-gradient(#0000001a_1px,transparent_1px)] [background-size:8px_8px]">
                    <div className="text-center text-lg font-medium text-gray-600 pb-6 font-pj">
                        Gallery
                    </div>
                    <div className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj text-center">
                        Before & After Showcase
                    </div>
                    <div className="text-lg font-medium text-center text-gray-600 mb-10">
                        Before-and-after gallery demonstrating the exceptional results of our professional car detailing services.
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.3 }}
                        className="md:container mx-auto sm:px-0 px-16 sm:w-2/3 lg:w-5/6 xl:w-3/4 2xl:w-3/5 mb-20">

                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <ReactCompareImage
                                    leftImageCss={{ width: "auto", Height: "auto" }}
                                    rightImageCss={{ width: "auto", Height: "auto" }}
                                    alt="before/after pics"
                                    leftImage={before}
                                    rightImage={after}
                                />
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <ReactCompareImage
                                    leftImageCss={{ width: "auto", Height: "auto" }}
                                    rightImageCss={{ width: "auto", Height: "auto" }}
                                    alt="before/after pics"
                                    leftImage={before1}
                                    rightImage={after1}
                                />
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <ReactCompareImage
                                    
                                    leftImageCss={{ width: "auto", Height: "auto" }}
                                    rightImageCss={{ width: "auto", Height: "auto" }}
                                    alt="before/after pics"
                                    leftImage={before2}
                                    rightImage={after2}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </>
        );
    }
}

export default Gallery;
