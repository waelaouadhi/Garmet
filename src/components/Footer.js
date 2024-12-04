import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../images/Garmet logo and iconArtboard 3SVG.svg'; // Correctly import the SVG


const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-garmetGreen p-8 bg-white text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4 flex items-center">
                <img
                    src={logo} // Use the imported SVG
                    alt="Garmet Logo"
                    className="w-[100px] h-[100px] mr-1 center"
                  />
                  
                </h3>
                <div className="text-md font-medium text-gray-600">
                  <h5>Etage 1 </h5>
                  <p>N°12, Av carthage </p>
                  <p>Ariana, Tunisie,</p>
                  <p>2039</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className="text-[#0B4551] text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#0B4551] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#0B4551] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#0B4551] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-[#0B4551] text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#0B4551] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Live Motherboard Diagnostics
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#0B4551] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Industrial Electrical Components
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#0B4551] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Ongoing Maintenance & Support
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#0B4551] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Custom Electrical Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-[#0B4551]">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <Link
                      to="#"
                      className="flex justify-center items-center text-[#0B4551] hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path d="M27 0H5C2.2 0 0 2.2 0 5v22c0 2.8 2.2 5 5 5h22c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM9.9 26H5.8V12h4.1v14zM7.9 10.4c-1.4 0-2.5-1.1-2.5-2.5S6.5 5.4 7.9 5.4s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm18.1 15.6h-4.1v-6.6c0-1.6-0.6-2.7-2.1-2.7-1.1 0-1.8 0.7-2.1 1.4-0.1 0.2-0.1 0.6-0.1 0.9v7h-4.1c0 0 0.1-11.4 0-12.6h4.1v1.8c0.5-0.8 1.4-2 3.4-2 2.5 0 4.4 1.6 4.4 5.1v7.7z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-[#0B4551]">
                  ARCA
                </HashLink>{" "}
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
