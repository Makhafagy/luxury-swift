import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    // Form validation check
    const formElements = form.current.elements
    let formIsValid = true

    // Loop through all the input fields to check if any of them are empty
    Array.from(formElements).forEach(field => {
      if (field.hasAttribute("required") && field.value.trim() === "") {
        formIsValid = false
        field.classList.add("border-red-500") // Add red border
        field.classList.remove("border-gray-300") // Remove the default gray border
      } else {
        field.classList.remove("border-red-500")
        field.classList.add("border-gray-300")
      }
    })

    if (!formIsValid) {
      return // Prevent the form from being submitted if any required field is empty
    }

    // Send email if all fields are valid
    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        form.current,
        process.env.GATSBY_PUBLIC_KEY
      )
      .then(
        result => {
          console.log("Email sent successfully:", result) // Log success
          alert("Message sent successfully!")
          form.current.reset()
        },
        error => {
          console.error("Failed to send message:", error) // Log error
          alert("Failed to send message. Please try again.")
        }
      )
      .catch(error => {
        alert("Failed to send message. Please try again.")
        console.error(error)
      })
  }

  return (
    <>
      <div className="relative container mx-auto sm:px-0 w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-3/5 mb-20">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2 font-sans">Contact Us</h1>
              <p className="text-gray-500 font-sans text-lg">
                We'd love to hear from you! Please fill out the form to get in
                touch with us.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 self-end">
              <div className="p-4">
                <h2 className="text-md uppercase text-blue-500 font-sans">
                  Email address
                </h2>
                <p className="text-gray-500 mt-3">
                  Luxuryswiftdetailing@gmail.com
                </p>
              </div>
              <div className="p-4">
                <h2 className="text-md uppercase text-blue-500 font-sans">
                  Get in touch
                </h2>
                <p className="text-gray-500 mt-3">+1 714-232-2325</p>
              </div>
              <div className="p-4">
                <h2 className="text-md uppercase text-blue-500 font-sans">
                  our location
                </h2>
                <p className="text-gray-500 mt-3">Orange county</p>
              </div>
              <div className="p-4">
                <h2 className="text-md uppercase text-blue-500 font-sans">
                  working hours
                </h2>
                <p className="text-gray-500 mt-3">
                  Monday-Friday
                  <br /> 8:00am to 6:00pm
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h2 className="text-xl font-semibold mb-6 font-sans">
              Send us a message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-800 font-sans mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-sans mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is it about?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-sans mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-sans mb-2 font-medium">
                  Write Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="flex flex-row gap-2">
                <button
                  className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  type="submit"
                  value="Send"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className="w-1/2 bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
