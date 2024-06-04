import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container mx-auto sm:px-0 w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-3/5 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side */}
                    <div className="flex flex-col justify-between">
                        <div className='mb-8'>
                            <h1 className="text-4xl font-bold mb-2 font-sans">Contact Us</h1>
                            <p className="text-gray-500 font-sans text-lg">We'd love to hear from you! Please fill out the form on the right to get in touch with us.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 self-end ">
                            <div className="p-4">
                                <h2 className="text-md uppercase text-blue-500 font-sans">Email address</h2>
                                <p className="text-gray-500 mt-3">contact@example.com</p>
                            </div>
                            <div className="p-4">
                                <h2 className="text-md uppercase text-blue-500 font-sans">Get in touch</h2>
                                <p className="text-gray-500 mt-3">+1 234 567 890</p>
                            </div>
                            <div className="p-4">
                                <h2 className="text-md uppercase text-blue-500 font-sans">our location</h2>
                                <p className="text-gray-500 mt-3">123 Main Rd Toronto, Ontario T1E 3G4 Canada</p>
                            </div>
                            <div className="p-4">
                                <h2 className="text-md uppercase text-blue-500 font-sans">working hours</h2>
                                <p className="text-gray-500 mt-3">Monday-Friday<br /> 8:00am to 6:00pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="bg-white p-8 rounded-lg shadow-2xl">
                        <h2 className="text-xl font-semibold mb-6 font-sans">Send us a message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-800 font-sans mb-2">Your name</label>
                                <input type="text" placeholder="enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-800 font-sans mb-2">Email Address</label>
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-800 font-sans mb-2">Write Your Message</label>
                                <textarea placeholder="How can we help?" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
                            </div>
                            <div className='flex flex-row gap-2'>
                            <button className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
                            <button type="reset" className="w-1/2 bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Reset</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact