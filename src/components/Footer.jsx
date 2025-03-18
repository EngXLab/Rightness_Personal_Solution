/* eslint-disable react/prop-types */
import footerlogo from "/Logo3.png";

import address from "/images/address.png";
import email from "/images/email.png";
import phone from "/images/phone-call.png";

const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="font-semibold mb-3 text-lg">{title}</h3>
    <ul className="space-y-2">{children}</ul>
  </div>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-sm hover:underline">
      {children}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-[#0f134b] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* Logo and Copyright Section */}
          <div className="mb-8 md:mb-0 ">
            <img src={footerlogo} className="mb-4 h-[100px] w-[100px] bg-white " alt="Footer Logo" />
            <p className="text-sm mb-4">
              © 2024 Rightness - All rights reserved.
            </p>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-auto w-full md:w-auto">
            <FooterColumn title="Quick Links">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/jobpage">Joblist</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </FooterColumn>

            <FooterColumn title="Reach Us">
              <ul className="space-y-4">
                <li className="text-sm flex items-center">
                  <img src={address} alt="Address" className="h-4 w-4 mr-2" />
                  <p>Nemi Krishna Society, D-8, Bajaj Cross Road, Jethava Nagar, Kandivali West, Mumbai-400067, Maharashtra</p>
                </li>
                <li className="text-sm flex items-center">
                  <img src={phone} alt="Phone" className="h-4 w-4 mr-2" />
                  <a href="tel:1300399299"> +918779680855</a>
                </li>
                <li className="text-sm flex items-center">
                  <img src={email} alt="Email" className="h-4 w-4 mr-2" />
                  <a
                    className="hover:underline"
                  >
                    info@rightness.in
                  </a>
                </li>
                {/* <li className="flex space-x-4 mt-2">
                  <a>
                    <img
                      src={facebook}
                      alt="Facebook logo"
                      className="h-5 w-5"
                    />
                  </a>
                  <a>
                    <img
                      src={instagram}
                      alt="Instagram logo"
                      className="h-5 w-5"
                    />
                  </a> */}
                {/* </li> */}
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
