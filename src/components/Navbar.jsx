import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "/Log_Navbar1.png";
import logo3 from "/Logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos.current > currentScrollPos) {
        setIsNavbarVisible(true);
      } else if (currentScrollPos > 0) {
        setIsNavbarVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[6vh] sm:h-[8vh] md:h-[6vh] lg:h-[10vh] z-50 transition duration-500 ease-in-out bg-gray-300 ${
        isNavbarVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex justify-between items-center px-4 p-1 bg-opacity-20 backdrop-blur">
        {/* Logo on the left for mobile view */}
        <Link to="/" className=" w-[60%] sm:w-[45%] md:w-[50%] lg:w-[40%] lg:hidden">
          <img src={logo} alt="Logo" className="" />
        </Link>

        {/* Hamburger menu icon on the right in mobile view */}
        <button
          className="text-gray-800 text-3xl lg:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>

        {/* Web view navigation */}
        <nav className="container mx-auto hidden lg:flex justify-between items-center px-4">
          <Link to="/" className="">
            <img src={logo} alt="Logo" className="lg:w-[90%]" />
          </Link>
          <ul className="space-x-2 flex">
            <li>
              <Link
                to="/"
                className="text-black text-[20px] hover:bg-gray-400 px-4 pb-2 py-1 rounded-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black text-[20px] hover:bg-gray-400 px-4 pb-2 py-1 rounded-xl"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-black text-[20px] hover:bg-gray-400 px-4 pb-2 py-1 rounded-xl"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/jobpage"
                className="text-black text-[20px] hover:bg-gray-400 px-4 pb-2 py-1 rounded-xl"
              >
                Jobs list
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black text-[20px] hover:bg-gray-400 px-4 pb-2 py-1 rounded-xl"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-40 lg:hidden"></div>
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-gray-200 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="flex flex-col items-center mt-12 px-4">
          <img src={logo3} alt="Logo" className="w-[200px] mb-8 mt-6 px-4" />
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/"
                className="text-black text-xl font-semibold underline-on-hover active-underline"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black text-xl font-semibold underline-on-hover active-underline"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-black text-xl font-semibold underline-on-hover active-underline"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/jobpage"
                className="text-black text-xl font-semibold underline-on-hover active-underline"
                onClick={() => setIsOpen(false)}
              >
                Jobs list
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black text-xl font-semibold underline-on-hover active-underline"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
