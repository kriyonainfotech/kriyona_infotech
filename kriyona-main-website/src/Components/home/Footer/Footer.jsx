import React from "react";
import "../Footer/Footer.css";
import { IoIosMail } from "react-icons/io";
import { FaUser, FaInstagram, FaLinkedinIn, FaYoutube, FaLongArrowAltRight } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer className="footer pt-5 pb-4 ">
        <div className="container">
          <div className="row justify-content-between">
            {/* Logo and Company Info */}
            <div className="col-lg-4 col-md-6  py-3 pt-1">
              <div className="col-12 d-flex text-md-start justify-content- pb-4">
                <div className="col-3">
                  <img src="/images/kriyona-infotech-logo.png" alt="logo" height={58} className="" />
                </div>
                <div className="col-9 mt-2 mt-md-0">
                  <h5 className="text-uppercase mb-0 text-darkgreen ">Kriyona Infotech</h5>
                  <p className="text-gray fst-italic mb-0">Bringing Visions to Digital Life.</p>
                </div>
              </div>
              <p className="text-gray fs-6 text-center text-md-start">
                Kriyona Infotech specializes in Flutter app development, custom software, web solutions, Digital Marketing and Ui/Ux Designing. Contact us to bring your ideas to life!
              </p>
              <p className="text-gray text-2xl text-center text-md-start ailgn-items-center"><IoLocation className="fs-4" />11-Ground Floor,Gruham Empire,Amroli,Surat - 394107 </p>
            </div>

            {/* Helpful Links */}
            <div className="col-lg-2 col-md-6 text-center text-md-start py-3 pt-0">
              <h6 className="text-darkgreen text-uppercase mb-4 text-center">Helpful Links</h6>
              <ul className="list-unstyled text-center">
                <li className="mb-2"><a href="#" className="text-gray text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#" className="text-gray text-decoration-none">Our Work</a></li>
                <li className="mb-2"><a href="#" className="text-gray text-decoration-none">Services</a></li>
                <li className="mb-2"><a href="#" className="text-gray text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-2 col-md-6 text-center text-md-start py-3 pt-0">
              <h6 className="text-darkgreen text-uppercase mb-4 text-center">Services</h6>
              <ul className="list-unstyled text-center">
                <li className="mb-2"><a href="#" className="text-gray text-decoration-none">App Development</a></li>
                <li className="mb-2"><a href="#" className="text-gray text-decoration-none">Blockchain</a></li>
                <li className="mb-2"><a href="#" className="text-gray text-decoration-none">Game Development</a></li>
                <li className="mb-2"><a href="#" className="text-gray text-decoration-none">UI / UX Design</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-lg-3 col-md-6 text-center text-md-start py-3 pt-0">
              <h6 className="text-darkgreen text-uppercase mb-4 text-center">Contact Us</h6>
              <ul className="list-unstyled text-center">
                <li className="mb-3 text-secondary">
                  <IoIosMail className="me-2 text-gray fs-4" />
                  <span className="text-gray">kriyonainfotech@gmail.com</span>
                </li>
                <li className="mb-3 text-secondary">
                  <FaUser className="me-2 text-gray fs-5" />
                  <span className="text-gray">Contact <FaLongArrowAltRight className="mx-1 text-gray" /> +91 77799 54551</span>
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <div className="ring d-flex justify-content-center align-items-center text-center">
                  <a href="mailto:kriyonainfotech@gmail.com?" className="text-secondary fs-3 mb-2 px-2 text-center"><IoIosMail /></a>
                </div>
                <div className="ring  d-flex justify-content-center align-items-center text-center">
                  <a href="https://www.instagram.com/kriyonainfotech/" target="blank" className="text-secondary fs-3 mb-2 px-2 text-center "><FaInstagram /></a>
                </div>
                <div className="ring  d-flex justify-content-center align-items-center text-center">
                  <a href="https://www.linkedin.com/company/kriyonainfotech" target="blank" className="text-secondary fs-3 mb-2 px-2 text-center"><FaLinkedinIn /></a>
                </div>
                <div className="ring  d-flex justify-content-center align-items-center text-center">
                  <a href="https://www.youtube.com/@KriyonaInfotech" target="blank" className="text-secondary fs-3 mb-2 px-2 text-center"><FaYoutube /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copy Right */}
      <div className="copy-right bg-darkgreen text-gray py-2">
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
