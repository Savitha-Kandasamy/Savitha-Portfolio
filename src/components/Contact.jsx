import React, { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import { callToAction } from "../constants";
import emailjs from "@emailjs/browser";

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_ghvwirz", 
        "template_zqml3ja", 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "savitha161703@gmail.com",
        },
        "C9isNmQSOFCEBL_xs" 
      );

      // Show success popup
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Hide success popup after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
   <section id="contact" className="mt-5 md:mt-8 mb-12">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] mb-10">
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="border border-gray-700 rounded-[20px] p-8">
          <h2 className="font-poppins font-semibold text-[28px] text-white mb-4">
            Contact Information
          </h2>
          <p className="font-poppins text-dimWhite text-[16px] mb-8">
            Open to collaboration, new ideas, and technology discussions.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-gradient font-poppins font-medium text-[14px] mb-2 uppercase tracking-wider">
                📞 PHONE
              </p>
              <p className="font-poppins text-white text-[16px]">
                +91 63741 40578
              </p>
            </div>

            <div>
              <p className="text-gradient font-poppins font-medium text-[14px] mb-2 uppercase tracking-wider">
                📧 EMAIL
              </p>
              <p className="font-poppins text-white text-[16px]">
                savitha161703@gmail.com
              </p>
            </div>

            <div>
              <p className="text-gradient font-poppins font-medium text-[14px] mb-2 uppercase tracking-wider">
                📍 LOCATION
              </p>
              <p className="font-poppins text-white text-[16px]">
                Coimbatore, India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-gray-700 rounded-[20px] p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-gradient font-poppins font-medium text-[14px] mb-2 flex items-center gap-2">
                  👤 Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white font-poppins text-[14px] focus:outline-none focus:border-teal-200 transition-colors"
                />
              </div>

              <div>
                <label className="text-gradient font-poppins font-medium text-[14px] mb-2 flex items-center gap-2">
                  📧 Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white font-poppins text-[14px] focus:outline-none focus:border-teal-200 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-gradient font-poppins font-medium text-[14px] mb-2 flex items-center gap-2">
                📝 Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white font-poppins text-[14px] focus:outline-none focus:border-teal-200 transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="text-gradient font-poppins font-medium text-[14px] mb-2 flex items-center gap-2">
                💬 Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="6"
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white font-poppins text-[14px] focus:outline-none focus:border-teal-200 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg font-poppins font-medium text-white text-[16px] hover:from-teal-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-teal-200/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "SENDING..." : "SEND"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-primary border border-teal-200 rounded-lg p-8 max-w-md mx-4 shadow-lg shadow-teal-200/20">
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="font-poppins font-semibold text-[24px] text-white mb-2">
                Message Sent!
              </h3>
              <p className="font-poppins text-dimWhite text-[16px]">
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LetsConnect;