import MapComponent from "../components/MapComponent";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const Contactus = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "your_service_id", // Replace with EmailJS Service ID
        "your_template_id", // Replace with EmailJS Template ID
        formData,
        "your_public_key" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email Sent Successfully:", response);
          setSuccessMessage("Message sent successfully!");
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Email Sending Failed:", error);
          setErrorMessage("Failed to send message. Please try again later.");
          setSuccessMessage("");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  
    return (
        <>
            <div className="flex items-center justify-center">
                <h1 className="text-4xl font-bold border-b-2 border-black my-10">Contact Us</h1>
            </div>
            <div className="flex items-center justify-center">
                <div className="border-2 border-black rounded-xl h-72 xs:w-80 sm:w-[calc(100vw-10vw)] flex flex-col justify-around pl-5">
                    <div className="flex items-center gap-3">
                        <IoLocation className="text-3xl border-2 border-black rounded-full h-10 w-10 p-1" />
                        <h1 className=" text-center font-bold m-1 xs:text-[14px] xs:w-52 sm:w-full md:text-lg mb-5">
                            KHASRA NO-384, VILL.
                            KULHARIWALA, P.O. MANDHALA, TEHSIL BADDI, DISTT. SOLAN

                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-3xl border-2 border-black rounded-full h-10 w-10 p-1" />
                        <h1 className=" text-center font-bold m-1 xs:text-[14px] xs:w-52 sm:w-full md:text-lg mb-5">
                            +91 0987654321

                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdEmail className="text-3xl border-2 border-black rounded-full h-10 w-10 p-1" />
                        <h1 className=" text-center font-bold m-1 xs:text-[14px] xs:w-52 sm:w-full md:text-lg mb-5">
                            bmwl@gmail.com

                        </h1>
                    </div>
                </div>

            </div>

        


            <div className="max-w-6xl my-5 mx-auto p-6 bg-white shadow-md rounded-lg">

      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}

      <form onSubmit={sendEmail} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:bg-gray-400 transition disabled:bg-gray-400"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>


            <MapComponent />
        </>
    );
};

export default Contactus;
