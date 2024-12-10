import React, { useState, useEffect, CSSProperties } from "react";
import Header from "../Components/home/header/Header";
import "./Home.css";
import PropagateLoader from "react-spinners/PropagateLoader";
// import "../js/custom.js";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import Counter from "../Components/counter.jsx";
import Footer from "../Components/home/Footer/Footer.jsx";
import TopBtn from "../Components/TopBtn.jsx";

const Home = () => {
  const [activeTab, setActiveTab] = useState("App Development");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // useEffect(() => {
  //   new WOW.WOW({
  //     live: true,
  //   }).init();
  // }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="load">
      {/* {loading ? (
        <div className="">
          <PropagateLoader
            color={"#562DF7"}
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

        {/* banner */}
        <section className="pt-150 position-relative banner">
          <img
            src="/images/banner/sideillusion.png"
            alt="sideillusion"
            className="position-absolute left-0 sideillusion"
          />
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="col-xs-5 col-sm-12 col-md-8 col-lg-6 col-xl-6">
                <div className="banner-content w-100 ">
                  <ul className="p-0 m-0 d-flex align-items-center position-relative">
                    <li className="text-green text-uppercase fs-4 pe-2 py-4">
                      Software
                    </li>
                    <li className="line"></li>
                    <li className="px-1 blueball">
                      <img
                        src="/images/banner/blueball1.png"
                        alt="blueball"
                        height={150}
                      />
                    </li>
                  </ul>
                  <h2 className="main-text text-uppercase text-multicolor font-goodtime">
                    Development Company
                  </h2>
                  <p className="text-secondary fst-italic fs-17">
                    We Build Innovative Mobile Application, Websites And
                    Blockchain Solutions
                  </p>
                  <button className="btn-bordermain border-0 outline-none bg-transparent my-4 main-btn rounded-20 px-4 py-3">
                    <Link className="text-darkgreen fs-5">
                      Explore Now <FaArrowRight className="ms-2" />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 col-sm-12 col-xs-12">
                <div className="banner-img animate__animated animate__fadeInUp">
                  <img
                    src="/images/banner/banner1.png"
                    alt="banner-img"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* who we are  */}
        <section className="p-50 py-5 position-relative z-99 overflowx-hidden">
          <div className="container">
            <h3 className="fs-17 text-darkgreen letter-spacing fw-light text-center text-uppercase">
              {" "}
              W h O &nbsp; W E &nbsp; A R E
            </h3>
            <h5 className="text-red text-center py-3 fs-3 font-goodtime ">
              KRIYONA INfotech
            </h5>
            <p className="text-white py-3 fs-14 text-center w-75 mx-auto fw-normal ls-05">
              At Kriyona Infotech , we specialize in UI/UX design, video editing, web development, mobile app development, and digital marketing to help your business grow. As a startup with a year of experience, we focus on delivering practical, impactful solutions tailored to your needs. Whether it’s creating user-friendly designs, developing robust websites or apps, or running paid ads to boost your visibility, our team is dedicated to providing results that truly make a difference. We pride ourselves on being straightforward, reliable, and genuinely invested in your success—working alongside you to turn your goals into reality.
            </p>
            <div className="text-center">
              <button className="border-0 outline-none bg-transparent my-2 border-blue rounded-20 px-4 py-3 shadow-blue">
                <Link className="text-darkgreen fs-5" to={'/about'}>
                  Read More
                  <FaArrowRight className="ms-2" />{" "}
                </Link>
              </button>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="p-100 pb-0 position-relative z-99">
          <img
            src="/images/technologies/pipe.png"
            className="position-absolute right-0 pipe top-50"
            alt="pipe"
          />
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <div className="left-content">
                <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase">
                  technologies
                </h3>
                <h3 className="text-uppercase fw-bold text-red py-3 font-goodtime">
                  We work with
                </h3>
              </div>
              <div className="right-content">
                <button className="border-0 outline-none bg-transparent my-2 border-blue rounded-20 p-3 shadow-blue">
                  <Link className="text-white fs-5">
                    Explore Now <FaArrowRight className="ms-2" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-12 col-sm-12">
              <div className="blur-background">
                <div className="container">
                  <div className="d-flex flex-wrap justify-content-between">
                    <div className="col-xs-8 col-sm-10 col-md-8 col-lg-12 col-xl-12 mx-auto">
                      <ul className="nav nav-pills d-flex flex-wrap align-items-center justify-content-between w-100">
                        <li className="nav-item my-3">
                          <button
                            className={`position-relative d-flex align-items-center text-start text-white fs-5 nav-link ${activeTab === "App Development" ? "active" : ""
                              }`}
                            onClick={() => handleTabClick("App Development")}
                          >
                            <img
                              src="/images/technologies/android.svg"
                              alt="android tech"
                              className="pe-2"
                            />
                            App <br />
                            Development
                          </button>
                        </li>
                        <li className="nav-item my-3">
                          <button
                            className={`d-flex align-items-center justify-content-center text-start text-white fs-5 nav-link ${activeTab === "Blockchain" ? "active" : ""
                              }`}
                            onClick={() => handleTabClick("Blockchain")}
                          >
                            <img
                              src="/images/technologies/blockchain.svg"
                              alt="blockchain"
                              className="pe-3"
                            />
                            <span className="text-left">
                              Web<br />
                              Develpment
                            </span>
                          </button>
                        </li>
                        <li className="nav-item my-3">
                          <button
                            className={`d-flex align-items-center justify-content-center text-white fs-5 nav-link ${activeTab === "Video Editing" ? "active" : ""
                              }`}
                            onClick={() => handleTabClick("Video Editing")}
                          >
                            <img
                              src="/images/technologies/game.svg"
                              alt="game"
                              className="pe-3"
                            />
                            Video Editing
                          </button>
                        </li>
                        <li className="nav-item my-3">
                          <button
                            className={`d-flex align-items-center justify-content-center text-white fs-5 nav-link ${activeTab === "UI/UX" ? "active" : ""
                              }`}
                            onClick={() => handleTabClick("UI/UX")}
                          >
                            <img
                              src="/images/technologies/ui-ux.svg"
                              alt="ui/ux"
                              className="pe-3"
                            />
                            UI/UX
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 tab-content mt-5 bg-lightgreen p-5 rounded-20 border border-secondary text-center">
                      <div
                        className={`tab-pane fade ${activeTab === "App Development" ? "show active" : ""
                          }`}
                        id="App Development"
                      >
                        <h4 className="text-center text-darkgreen fs-1 py-3 font-inter cursor-pointer lines w-sm-100 w-md-75 w-lg-50 w-xl-50 mx-auto d-inline-block">
                          App Development
                        </h4>
                        <p className="text-white w-sm-100 w-md-75 w-lg-50 w-xl-50 fs-17 mx-auto text-center py-3 line-spacing">
                          We specialize in developing mobile applications using Flutter and React Native, building apps for both Android and iOS platforms that cater to a wide range of needs like multimedia, finance, business, communication, and more.
                        </p>
                        <div className="icons">
                          <ul className="m-0 p-0 d-flex flex-wrap justify-content-center py-3">
                            <li className="m-3">
                              <img
                                src="/images/technologies/icon1.png"
                                alt="1"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="m-3">
                              <img
                                src="/images/technologies/icon2.png"
                                alt="2"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="m-3">
                              <img
                                src="/images/technologies/icon3.png"
                                alt="3"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="m-3">
                              <img
                                src="/images/technologies/icon4.png"
                                alt="4"
                                className="p-3"
                                height={100}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade ${activeTab === "Blockchain" ? "show active" : ""
                          }`}
                        id="Blockchain"
                      >
                        <h4 className="d-inline-block mx-auto text-darkgreen fs-1 py-3 font-inter cursor-pointer lines w-50 mx-auto">
                          Web Development
                        </h4>
                        <p className="text-white w-75 fs-17 mx-auto text-center py-3 line-spacing">
                          We create complete websites, combining a user-friendly front-end with a powerful back-end to ensure your business stands out online. From crafting engaging designs to building robust functionality, we focus on delivering a seamless online presence that helps your business gain the recognition it deserves.
                        </p>
                        <div className="icons">
                          <ul className="m-0 p-0 d-flex flex-wrap justify-content-center py-3">
                            <li className="mx-3">
                              <img
                                src="/images/services/reactjs.png"
                                alt="5"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="mx-3">
                              <img
                                src="/images/services/node.png"
                                alt="5"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="mx-3">
                              <img
                                src="/images/services/mongo.png"
                                alt="6"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="mx-3">
                              <img
                                src="/images/services/aws.png"
                                alt="7"
                                className="p-3"
                                height={100}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade ${activeTab === "Video Editing" ? "show active" : ""
                          }`}
                        id="Video Editing"
                      >
                        <h4 className="d-inline-block mx-auto  text-darkgreen fs-1 py-3 font-inter cursor-pointer lines w-50 mx-auto">
                          Video Editing & Graphics
                        </h4>
                        <p className="text-white w-75 text-center fs-17 mx-auto py-3 line-spacing">
                          We also provide professional video editing services, specializing in creating dynamic and engaging content such as reels, animations, and promotional videos. Using tools like After Effects, we bring your ideas to life with visually stunning edits that capture attention and resonate with your audience.
                        </p>
                        <div className="icons">
                          <ul className="m-0 p-0 d-flex flex-wrap justify-content-center py-3">
                            <li className="mx-3">
                              <img
                                src="/images/services/ae.png"
                                alt="8"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="mx-3">
                              <img
                                src="/images/services/dr.png"
                                alt="8"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="mx-3">
                              <img
                                src="/images/services/photoshop.png"
                                alt="9"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="mx-3">
                              <img
                                src="/images/services/ill.png"
                                alt="10"
                                className="p-3"
                                height={100}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className={`tab-pane fade ${activeTab === "UI/UX" ? "show active" : ""
                          }`}
                        id="UI/UX"
                      >
                        <h4 className="d-inline-block mx-auto text-darkgreen fs-1 py-3 font-inter cursor-pointer lines w-75 mx-auto">
                          UI / UX And Graphics Design
                        </h4>
                        <p className="text-white w-50 text-center fs-17 mx-auto py-3 line-spacing">
                          Our UI design focuses on creating visually appealing and emotionally comfortable experiences, ensuring that users connect with your product in a meaningful and intuitive way.
                        </p>
                        <div className="icons">
                          <ul className="m-0 p-0 d-flex flex-wrap justify-content-center py-3">
                            <li className="mx-3">
                              <img
                                src="/images/technologies/icon10.png"
                                alt="11"
                                className="p-3"
                                height={100}
                              />
                            </li>
                            <li className="mx-3">
                              <img
                                src="/images/technologies/icon12.svg"
                                alt="12"
                                className="p-4"
                                height={100}
                              />
                            </li>
                            <li className="mx-3">
                              <img
                                src="/images/technologies/icon-13.svg"
                                alt="13"
                                className="p-4"
                                height={100}
                              />
                            </li>
                            <li className="mx-3">
                              <img
                                src="/images/technologies/icon14.svg"
                                alt="14"
                                className="p-4"
                                height={100}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* portfolio */}
        {/* <section className="p-5">
          <div className="container">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-between">
                <div className="d-sm-none d-md-block d-lg-block d-xl-block col-md-5 col-lg-4 col-xl-5  pt-5 mt-5 text-center">
                  <div className="portfolio-img d-inline-block w-100 ">
                    <img
                      src="/images/ourwork/NFTANCY.png"
                      alt="p1"
                      className="py-4 w-75 "

                    />
                  </div>
                  <div className="portfolio-img d-inline-block w-100">
                    <img
                      src="/images/ourwork/digi.png"
                      alt="p2"
                      className=" py-3 w-75"
                    />
                  </div>
                  <h3 className="pt-5">
                    <Link className="text-red fs-2 d-flex align-items-center justify-content-center">
                      {" "}
                      VIEW PORTFOLIO <FaArrowRight className="ms-3" />
                    </Link>
                  </h3>
                </div>
                <div className="d-sm-none d-md-block d-lg-block d-xl-block col-md-6 col-lg-6 col-xl-6 left-content">
                  <div className="d-flex align-items-end w-100">
                    <div className="w-65">
                      <div>
                        <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase mt-5 pt-5">
                          HOW WE WORK
                        </h3>
                        <h3 className="text-uppercase fw-bold text-red py-3 font-goodtime">
                          PORTFOLIO
                        </h3>
                      </div>
                      <div className="portfolio-img mt-5 w-5 d-inline-block">
                        <img
                          src="/images/ourwork/Frame 1.png"
                          alt="p3"
                          className=" py-3 w-75 " style={{ height: '250px', objectFit: 'contain' }}
                        />
                      </div>
                      <div className="portfolio-img d-inline-block">
                        <img
                          src="/images/ourwork/eibm.png"
                          alt="p4"
                          className="rounded-15 py-4 w-75"
                          style={{ height: '300px', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    <div className="py-5 d-md-none d-sm-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block">
                      <img
                        src="/images/portfolio/textportfolio.svg"
                        className=""
                        height={900}
                        alt="text-portfolio"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="p-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-4 text-center mb-4 mb-md-0">
                <div className="portfolio-img mb-4">
                  <img
                    src="/images/ourwork/NFTANCY.png"
                    alt="NFTANCY"
                    className="w-75"
                  />
                </div>
                <div className="portfolio-img mb-4">
                  <img
                    src="/images/ourwork/digi.png"
                    alt="Digi"
                    className="w-75"
                  />
                </div>
                <h3>
                  <Link
                    to="/portfolio"
                    className="text-red fs-2 d-flex align-items-center justify-content-center"
                  >
                    VIEW PORTFOLIO <FaArrowRight className="ms-3" />
                  </Link>
                </h3>
              </div>

              <div className="col-12 col-md-7 col-lg-8">
                <div className="d-flex flex-column h-100 ">
                  <div className="mb-5">
                    <span className=" fs-17 text-darkgreen fw-light letter-spacing text-uppercase mt-5">
                      HOW WE WORK
                    </span>
                    <span className="h3 ps-3 text-uppercase fw-bold text-red py-3 font-goodtime">
                      PORTFOLIO
                    </span>
                  </div>

                  <div className="portfolio-img mb-4 ">
                    <img
                      src="/images/ourwork/Frame 1.png"
                      alt="Portfolio Item 1"
                      className=""
                      style={{ height: '250px', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="portfolio-img mb-4">
                    <img
                      src="/images/ourwork/eibm.png"
                      alt="Portfolio Item 2"
                      className="w-75"
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* downloads,ratings */}
        {/* <section className="p-50">
          <div className="container">
            <div className="d-flex">
              <div className="blur-background3 border border-success  col-9 py-5 mx-auto">
                <div className="text-white">
                  <div className="w-100" id="counter">
                    <Counter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/*our team*/}
        {/* <section className="py-5">
          <div className="container">
            <div className="text-center">
              <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase">
                Our
              </h3>
              <h3 className="text-uppercase fw-bold text-red py-3 font-goodtime">
                Team
              </h3>
            </div>
            <div className="col-12 pb-5 d-flex flex-wrap justify-content-between align-items-center">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                <div className="customers">
                  <ul className="d-xs-flex d-sm-flex d-md-flex d-lg-block d-xl-block justify-content-evenly">
                    <li className="text-end">
                      <img
                        src="/images/customers/client1.png"
                        alt="c1"
                        className="rounded-circle border border-dark border-1"
                        height={120}
                      />
                    </li>
                    <li className="text-center">
                      <img
                        src="/images/customers/client1.png"
                        alt="c1"
                        className="rounded-circle border border-dark border-1"
                        height={120}
                      />
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <div className="blur-background3 border border-success position-relative z-99">
                  <img
                    src="/images/comma.png"
                    className="position-absolute quote d-none d-lg-block d-xl-block"
                    alt=""
                  />
                  <div className="p-5">
                    <p className="text-secondary text-center">
                      Working With Athh Technologies Has Been A Pleasant
                      Experience For Me. My Projects Were Developed With
                      Exceptional Work With This Team And I Really Appreciate
                      How They Went About It.
                    </p>
                  </div>
                  <div className="position-absolute client-img">
                    <img
                      src="/images/customers/client1.png"
                      className="rounded-circle border border-dark border-1 "
                      height={120}
                      alt=""
                    />
                    <p className="text-dark text-center pt-2 fs-5">
                      Vicky Singh
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block d-xl-bock">
                <div className="customers">
                  <ul className="d-xs-flex d-sm-flex d-md-flex d-lg-block d-xl-block justify-content-evenly">
                    <li className="text-start">
                      <img
                        src="/images/customers/client1.png"
                        alt="c1"
                        className="rounded-circle border border-dark border-1"
                        height={120}
                      />
                    </li>
                    <li className="text-center">
                      <img
                        src="/images/customers/client1.png"
                        alt="c1"
                        className="rounded-circle border border-dark border-1"
                        height={120}
                      />
                    </li>
                    <li className="text-start">
                      <img
                        src="/images/customers/client1.png"
                        alt="c1"
                        className="rounded-circle border border-dark border-1"
                        height={120}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="py-5">
          <div className="container">
            {/* Section Header */}
            <div className="text-center mb-5">
              <h3 className="text-uppercase text-darkgreen letter-spacing fw-light">
                Meet
              </h3>
              <h2 className="text-uppercase fw-bold text-red">Our Team</h2>
              <p className="text-secondary fs-6 mt-2">
                A passionate group of professionals dedicated to achieving excellence in every project.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="row g-4 justify-content-center">
              {[
                { name: "Kirtan Narola", image: "kirtan.jpeg", role: "CEO" },
                { name: "Nayan Bhisara", image: "nayan.jpg", role: "Video Editor" },
                { name: "Sujal Tank", image: "client4.png", role: "Full Stack Developer" },
                { name: "Prarthana Vaghani", image: "prarthana.jpg", role: "Full Stack Developer" },
              ].map((member, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-5 text-center " key={index}>
                  <div className="card border-0 shadow-sm h-auto blur-background3 text-white">
                    <img
                      src={`/images/team/${member.image}`}
                      alt={member.name}
                      className="rounded-circle mx-auto mt-3 object-position-top"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        border: "2px solid #ddd",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-white fw-bold ">{member.name}</h5>
                      <p className="card-text text-white">{member.role}</p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* methodology */}
        <section className="p-100">
          <div className="container">
            <div className="blur-background3 border border-success col-10 mx-auto">
              <div className="">
                <div className="row d-flex justify-content-between px-3 px-lg-5">
                  <div className="col-6">
                    <div>
                      <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase">
                        the kriyona infotech
                      </h3>
                      <h5 className="d-lg-none text-uppercase fw-bold text-red py-3 font-goodtime">
                        methodology
                      </h5>
                      <h3 className="d-none d-lg-flex text-uppercase fw-bold text-red py-3 font-goodtime">
                        methodology
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 justify-content-end d-flex ">
                    <button className="border-0 outline-none bg-transparent rounded-20 ">
                      <Link className="text-darkgreen fs-5  border-red  shadow-red px-4 py-3 rounded-20">Contact Us</Link>
                    </button>
                  </div>
                </div>
                <div className="row d-flex justify-content-evenly pt-5">
                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    <div className="border-top border-bottom border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">Understanding Your Needs</h5>
                      <p className="text-secondary py-2 fs-14">
                        We begin by deeply understanding your business goals and challenges. This helps us tailor our solutions to meet your specific requirements.
                      </p>
                    </div>
                    <div className="border-top border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">
                        Planning and Strategy
                      </h5>
                      <p className="text-secondary py-2 fs-14">
                        We craft a detailed plan and strategy, prioritizing scalability, performance, and user experience. Every step is carefully mapped to ensure a smooth execution.
                      </p>
                    </div>
                    <div className="border-top border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">
                        Adaptive Process
                      </h5>
                      <p className="text-secondary py-2 fs-14">
                        We divide the project into smaller tasks, delivering parts of the solution regularly to keep everything on track.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    <div className="border-top border-bottom border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">
                        Quality Assurance
                      </h5>
                      <p className="text-secondary py-2 fs-14">
                        We ensure top-notch quality by conducting rigorous testing to identify and resolve any issues before deployment.
                      </p>
                    </div>
                    <div className="border-top border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">Timely Delivery</h5>
                      <p className="text-secondary py-3 fs-14">
                        Our team is committed to meeting deadlines without compromising on quality, ensuring that your project launches on time.
                      </p>
                    </div>
                    <div className="border-top border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">Ongoing Support</h5>
                      <p className="text-secondary py-2 fs-14">
                        Post-delivery, we offer continuous support and updates to ensure your solutions stay effective and aligned with your business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why kriyona */}
        <section className="why-kriyona">
          <div className="container">
            <div className="text-center">
              <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase">
                WHY
              </h3>
              <h3 className="text-uppercase fw-bold text-red py-3 font-goodtime">
                kriyona Infotech
              </h3>
            </div>
            <div className="py-3 position-relative d-flex flex-wrap align-items-center justify-content-center">
              <img
                src="/images/why kriyona/bigline.svg"
                alt="bigline"
                className="position-absolute top-59 w-100"
              />
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 position-relative z-99">
                <div className="mx-auto w-140 text-center rounded-circle blur-background2 border border-1 boredr-white">
                  <img src="/images/why kriyona/bulb.svg" alt="bulb" />
                </div>
                <h2 className="text-darkgreen fs-75 fw-bold d-inline-block position-absolute number">
                  01
                </h2>
              </div>
              <div className="col-3 position-relative z-99">
                <div className="mx-auto w-140 text-center rounded-circle blur-background2 border border-1 boredr-white">
                  <img src="/images/why kriyona/eye.svg" alt="eye" />
                </div>
                <h2 className="text-darkgreen fs-75 fw-bold d-inline-block position-absolute number">
                  02
                </h2>
              </div>
              <div className="col-3 position-relative z-99">
                <div className="mx-auto w-140 text-center rounded-circle blur-background2 border border-1 boredr-white">
                  <img
                    src="/images/why kriyona/value.svg"
                    alt="value"
                  />
                </div>
                <h2 className="text-darkgreen fs-75 fw-bold d-inline-block position-absolute number">
                  03
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* newsletter */}
        <section className="p-50">
          <div className="container">
            <div className="blur-background3 shadow col-10 mx-auto">
              <h3 className="text-uppercase text-center fw-bold text-darkgreen py-3 font-goodtime">
                newsletter
              </h3>
              <p className="fs-17 text-secondary py-4 text-center w-50 mx-auto">
                Follow Our Most Recent News And Events. Join Our Newsletter
                Today.
              </p>
              <form className="text-center py-3">
                <input
                  type="text"
                  placeholder="Enter Message"
                  className="border-red rounded-pill px-4 py-3 text-dark bg-transparent w-50 fs-5"
                />
                <button className="shadow-red d-block mx-auto mt-5 rounded-pill px-5 py-3 bg-red border-0 outline-none m-0 p-0">
                  <Link className="text-white">
                    Subscribe <FaArrowRight />
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* footer */}
        <Footer></Footer>
        {/* topbtn */}
        <TopBtn></TopBtn>
      </div>
      {/* // )} */}
    </div>
  );
};

export default Home;
