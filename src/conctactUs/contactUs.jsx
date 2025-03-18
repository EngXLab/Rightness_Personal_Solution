import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import bgImage from "/images/img-3.jpg";
import { v4 as uuidv4 } from "uuid";
import { useSnackbar } from "notistack";

const HomeSection7 = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleLearnMore = () => {
    navigate("/services");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";

    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^(?:\+?\d{1,3})?(?:[-()\s]*0)?\d{10}$/.test(formData.phone.replace(/[-()\s]/g, ""))) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (!formData.resume) newErrors.resume = "Resume is required"; 
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const id = uuidv4();
        console.log("Form submitted with data: ", { id, ...formData });
        enqueueSnackbar("Submitted Successfully!", { variant: "success" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          resume: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        enqueueSnackbar("Submit Failed!", { variant: "error" });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section
      ref={ref}
      className={`md:h-[851px] h-auto w-full bg-cover bg-center py-12 lg:py-4 mt-14 relative`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "top center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col md:flex-row justify-around items-center h-full lg:mr-8">
        <div className="text-white text-left flex flex-col md:flex-row justify-around items-center md:items-start md:gap-0 gap-8">
          <div className="flex flex-col items-start gap-8 pl-8 z-10">
            <h1 className="text-[20px] md:text-[52px] md:w-[60%] font-bold mb-2 lg:mb-8">
              JUST ONE CALL DOES IT ALL
            </h1>
            <p className="text-[18px] md:text-[24px] font-sans font-light md:w-[60%]">
            No need to worry, we’ll handle your staffing needs. The solution is right at 
            your fingertips.
            </p>
            <p className="text-[18px] md:text-[24px] font-sans font-light md:w-[60%]">
            Complete the attached form, and we’ll connect with you within 24 hours.

            </p>
            <button
              className="bg-blue-500 h-[50px] md:h-[71px] w-[150px] md:w-[173px] rounded-md font-semibold hover:bg-blue-900 transition-colors"
              onClick={handleLearnMore}
            >
              Learn More
            </button>
          </div>
        </div>
        <form
          className="flex flex-col gap-6 mt-8 md:mt-0 z-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="firstName"
                className="font-sans text-[16px] md:text-[20px] text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-[300px] lg:w-[260px] h-[50px] lg:h-[64px] rounded-lg bg-white bg-opacity-80 text-black px-4"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="lastName"
                className="font-sans text-[16px] md:text-[20px] text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-[300px] lg:w-[260px] h-[50px] lg:h-[64px] rounded-lg bg-white bg-opacity-80 text-black px-4"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-sans text-[16px] md:text-[20px] text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-[300px] lg:w-[260px] h-[50px] lg:h-[64px] rounded-lg bg-white bg-opacity-80 text-black px-4"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="phone"
                className="font-sans text-[16px] md:text-[20px] text-white"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-[300px] lg:w-[260px] h-[50px] lg:h-[64px] rounded-lg bg-white bg-opacity-80 text-black px-4"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <label
              htmlFor="message"
              className="font-sans text-[16px] md:text-[20px] text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-[300px] md:w-[586px] h-[100px] md:h-[206px] rounded-lg bg-white bg-opacity-80 text-black p-4"
              placeholder="Enter your message"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="resume"
              className="font-sans text-[16px] md:text-[20px] text-white"
            >
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}  // You may want to handle this differently
              className="flex w-[300px] lg:w-[580px] h-[50px] lg:h-[64px] rounded-lg bg-white bg-opacity-80 text-black px-4 lg:pt-4"
            />
            {errors.resume && (
              <span className="text-red-500 text-sm">{errors.resume}</span>
            )}
          </div>
        </div>
          <button
            type="submit"
            className="bg-blue-500 h-[40px] md:h-[58px] w-[150px] md:w-[209px] rounded-xl font-semibold text-white hover:bg-blue-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeSection7;
