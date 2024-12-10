import React, { useState, useEffect } from "react";
import Header from "../Components/home/header/Header";
import Footer from "../Components/home/Footer/Footer";
// import Loader from "../Components/Loader.jsx";
// import "../Components/Loader.js";
import { IoIosMail } from "react-icons/io";
import PropagateLoader from "react-spinners/PropagateLoader";
import TopBtn from "../Components/TopBtn.jsx";
import { FaInstagram } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="load">
      {/* {loading ? (
        <div className="">
          <PropagateLoader
            color={"red"}
            className="h-100 w-100"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : ( */}

          <div className="bgmain w-100">
            {/* header */}
            <Header></Header>
            <section className="pt-150">
              <div className="container">
                <div>
                  <div className="pb-4 border-bottom border-green">
                    <h3 className="text-center text-red fs-1 fw-bold font-goodtime text-uppercase">
                      Contact
                    </h3>
                    <p className="text-darkgreen text-center">HOME / Contact</p>
                  </div>
                  <div className="py-5">
                    <p className="text-darkgreen letter-spacing8">
                      GET IN TOUCH
                    </p>
                    <h5 className="text-red font-goodtime fs-1">
                      WAY TO CONTACT US
                    </h5>
                    <p className="text-dark py-3 w-75 text-white">
                      <font color="white">
                        Kriyona Infotech PERFORMS ADVANCED SOFTWARE DEVELOPMENT
                        COMPANY,
                      </font>{" "}
                      AS WELL AS WORK WITH FFRDC'S AND RESEARCH CONTRACTS.
                    </p>
                  </div>
                  <div className="py-5">
                    <div className="d-flex flex-wrap justify-content-between">
                      <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
                        <img
                          src="/images/contact/book.png"
                          alt="book"
                          className="w-100"
                        />
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 ">
                        <p className="fs-1 text-darkgreen font-goodtime fw-bold">
                          Kriyona Infotech
                        </p>
                        <p className="letter-spacing8 fs-5 text-white">SOFTWARE COMPANY</p>
                        <div className="d-flex flex-wrap col-10 justify-content-between py-3">
                          <div className="col-5 d-flex flex-wrap">
                            <div>
                              <p className="text-uppercase fw-bold m-0 text-white">
                                <img
                                  src="/images/contact/download (2).png"
                                  alt="indianflag"
                                  height={30}
                                  className="pe-3"
                                />
                                india(hq)
                              </p>
                              <p className="text-secondary">
                                11-Ground Floor,Gruham Empire,Amroli,Surat - 394107
                              </p>
                            </div>
                            
                          </div>
                          <div className="col-5">
                            <div>
                              <p className="fw-bold text-uppercase m-0 text-white">
                                email
                              </p>
                              <p className="text-secondary">kriyonainfotech@gmail.com</p>
                              
                            </div>
                           
                          </div>
                         <div className="row w-100">
                         <div className="pt-4 d-flex flex-column align-items-center">
                              <p className="fw-bold font-goodtime text-white">
                                SOCIAL CONTACT
                              </p>
                              <ul className="m-0 p-0 d-flex flex-wrap">
                                <li className="mx-2 bg-transparent rounded-circle hw-30">
                                  <a href="mailto:kriyonainfotech@gmail.com?" className="text-darkgreen fs-4">
                                    <IoIosMail />
                                  </a>
                                </li>
                                <li className="mx-2 bg-transparent rounded-circle hw-30">
                                  <a href="https://www.instagram.com/kriyonainfotech/" target="blank" className="text-darkgreen fs-4">
                                    <FaInstagram />
                                  </a>
                                </li>
                                <li className="mx-2 bg-transparent rounded-circle hw-30">
                                  <a href="https://www.linkedin.com/company/kriyonainfotech" target="blank" className="text-darkgreen fs-4">
                                    <FaLinkedinIn />
                                  </a>
                                </li>
                                <li className="mx-2 bg-transparent rounded-circle hw-30">
                                  <a href="https://www.youtube.com/@KriyonaInfotech" target="blank" className="text-darkgreen fs-4">
                                  <AiFillYoutube />

                                  </a>
                                </li>
                              </ul>
                            </div>
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    <form className="col-11 mx-auto blur-background text-center">
                      <h4 className="fw-bold text-red fs-3 text-center w-75 mx-auto font-goodtime">
                        SHARE YOUR DETAILS TO HELP US SERVE YOU BETTER
                      </h4>
                      <div className="d-flex flex-wrap py-5 justify-content-between d-grid gap-3">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="bg-transparent border-success border-1 border outline-none rounded-20 p-3 text-white"
                          size={50}
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="bg-transparent border-success border-1 border outline-none rounded-20 p-3"
                          size={50}
                        />
                      </div>
                      <input
                        type="mail"
                        placeholder="E-Mail Address"
                        className="bg-transparent border-success border-1 border outline-none rounded-20 p-3 w-100"
                      />
                      <textarea
                        className="bg-transparent border-success border-1 border outline-none rounded-20 p-3 w-100 mt-5"
                        placeholder="Enter Your Message"
                      ></textarea>
                      <button className="py-3 border-0 rounded-pill w-25 mt-4 bg-red shadow-red text-white">
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="py-5">
                    <div className="col-11 mx-auto">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14873.104088786407!2d72.8495542!3d21.2605389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be049d2fbbb8ca9%3A0x4bea5516282492ab!2sKriyona%20E-commerce%20Service!5e0!3m2!1sen!2sin!4v1720274884858!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="w-100 rounded-20"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* footer */}
            <Footer></Footer>
            <TopBtn></TopBtn>
          </div>
        
      {/* )} */}
    </div>
  );
};

export default Contact;
