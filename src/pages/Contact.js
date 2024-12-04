import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import axios from "axios";
import Notiflix from "notiflix";

const Contact = () => {
  useDocTitle("MLD | Molad e Konsult - Send us a message");

  // State variables
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  // Reset form fields and errors
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Loading...";

    try {
      const response = await axios.post(
        process.env.REACT_APP_CONTACT_API,
        formData
      );
      resetForm();
      Notiflix.Report.success("Success", response.data.message, "Okay");
    } catch (error) {
      const { response } = error;
      if (response && response.status === 500) {
        Notiflix.Report.failure(
          "An error occurred",
          response.data.message || "Server error",
          "Okay"
        );
      }
      if (response && response.data.errors) {
        setErrors(response.data.errors);
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  };

  return (
    <>
      <NavBar />
      <div
        id="contact"
        className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24"
      >
        <div className="container mx-auto px-4 lg:px-20">
          <form onSubmit={handleSubmit}>
            <div className="bg-white p-8 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl">
              <h1 className="font-bold text-4xl text-garmetGreen uppercase text-center lg:text-left">
                Send us a message
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {["firstName", "lastName", "email", "phone"].map((field, idx) => (
                  <div key={idx}>
                    <input
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      placeholder={`${field.replace(/^\w/, (c) => c.toUpperCase())}*`}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                    {errors[field] && (
                      <p className="text-red-500 text-sm">{errors[field]}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-[#d1e622] text-black p-3 rounded-lg w-full"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;