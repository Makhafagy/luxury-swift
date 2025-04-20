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
        process.env.GATSBY_AUTO_REPLY_ID,
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
    <div className="relative container mx-auto w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-3/5 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section: Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold font-sans">Contact Us</h1>
            <p className="text-gray-600 text-lg mt-2 font-sans">
              We'd love to hear from you. Fill out the form to get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base">
            <div>
              <h2 className="uppercase text-blue-600 font-semibold mb-1 text-sm">
                Email
              </h2>
              <p className="text-gray-800 text-[1rem] break-words">
                Luxuryswiftdetailing@gmail.com
              </p>
            </div>
            <div>
              <h2 className="uppercase text-blue-600 font-semibold mb-1 text-sm">
                Phone
              </h2>
              <p className="text-gray-800 text-[1rem]">+1 714-232-2325</p>
            </div>
            <div>
              <h2 className="uppercase text-blue-600 font-semibold mb-1 text-sm">
                Location
              </h2>
              <p className="text-gray-800 text-[1rem]">Orange County</p>
            </div>
            <div>
              <h2 className="uppercase text-blue-600 font-semibold mb-1 text-sm">
                Hours
              </h2>
              <p className="text-gray-800 text-[1rem]">
                All days
                <br />
                24/7
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-6 font-sans">
            Send us a message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-gray-800 mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1 font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What is it about?"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1 font-medium">
                Message
              </label>
              <textarea
                name="message"
                placeholder="How can we help?"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Send
              </button>
              <button
                type="reset"
                className="w-1/2 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
