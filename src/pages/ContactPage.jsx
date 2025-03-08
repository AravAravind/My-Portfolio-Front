import { useState } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to send message. Please try again.");
    }

    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-[#0d0d0d] text-white px-6">
      <div className="max-w-4xl w-full bg-[#131313] p-10 rounded-2xl shadow-lg flex flex-col items-center gap-8">
        
        {/* Centered Headings */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-200">Get in Touch</h2>
          <h3 className="text-3xl font-semibold text-gray-400 mt-2">Contact</h3>
        </div>

        {/* Two Sections with Divider */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 w-full">
          
          {/* Left Section - Contact Info */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 flex-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-lg w-full">
                <Mail className="text-gray-400" />
                <span className="text-gray-300">theravindarav@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-lg w-full">
                <Linkedin className="text-gray-400" />
                <span className="text-gray-300">LinkedIn</span>
              </div>
              <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-lg w-full">
                <MapPin className="text-gray-400" />
                <span className="text-gray-300">Tamil Nadu - India</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-gray-600 opacity-50"></div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-1/2 flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-[#1a1a1a] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-[#1a1a1a] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-[#1a1a1a] text-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all">
                Send Message
              </button>
            </form>
            {successMessage && <p className="text-green-400 mt-4 text-center">{successMessage}</p>}
            {errorMessage && <p className="text-red-400 mt-4 text-center">{errorMessage}</p>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
