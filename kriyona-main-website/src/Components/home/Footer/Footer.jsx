import React from "react";
import "../Footer/Footer.css";
import { IoIosMail } from "react-icons/io";
import { FaUser, FaInstagram, FaLinkedinIn, FaTwitter, FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer pt-5 pb-4 bg-lightgreen">
        <div className="container">
          <div className="row justify-content-between">
            {/* Logo and Company Info */}
            <div className="col-lg-3 col-md-6 text-center text-md-start py-3">
              <img src="/images/kriyona-infotech-logo.png" alt="logo" height={58} className="mb-3" />
              <h5 className="text-uppercase text-darkgreen mb-2">Kriyona Infotech</h5>
              <p className="text-green fst-italic">Where Future Begins</p>
              <p className="text-white fs-6">
                Kriyona Infotech is a creative digital agency based in India, composed of talented designers and experienced developers.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#" className="text-darkgreen fs-4"><IoIosMail /></a>
                <a href="#" className="text-darkgreen fs-4"><FaInstagram /></a>
                <a href="#" className="text-darkgreen fs-4"><FaLinkedinIn /></a>
                <a href="#" className="text-darkgreen fs-4"><FaTwitter /></a>
              </div>
            </div>

            {/* Helpful Links */}
            <div className="col-lg-2 col-md-6 text-center text-md-start py-3">
              <h6 className="text-darkgreen text-uppercase mb-4">Helpful Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Our Work</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Services</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-2 col-md-6 text-center text-md-start py-3">
              <h6 className="text-darkgreen text-uppercase mb-4">Services</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">App Development</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Blockchain</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Game Development</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">UI / UX Design</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-lg-3 col-md-6 text-center text-md-start py-3">
              <h6 className="text-darkgreen text-uppercase mb-4">Contact Us</h6>
              <ul className="list-unstyled">
                <li className="mb-3 text-secondary">
                  <IoIosMail className="me-2 text-white" />
                  <span className="text-white">kriyonainfotech@gmail.com</span>
                </li>
                <li className="mb-3 text-secondary">
                  <FaUser className="me-2 text-darkgreen" />
                  <span className="text-white">Contact <FaLongArrowAltRight className="mx-2 text-white" /> +91 77799 54551</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copy Right */}
      <div className="copy-right bg-darkgreen text-white py-2">
        <div className="container text-center">
          <p className="m-0 fs-6">
            © 2024 Kriyona Infotech. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
