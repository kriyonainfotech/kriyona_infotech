import React, { useEffect, useState } from "react";
import "../Pages/OurWork.css";
import Header from "../Components/home/header/Header";
import Footer from "../Components/home/Footer/Footer";
import { card, card2 } from "../Data/OurWork";
import TopBtn from "../Components/TopBtn";
import PropagateLoader from "react-spinners/PropagateLoader";

const OurWork = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 6000);
  // }, []);

  return (
    <div className="load">
      {/* {loading ? (
        <div>
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
        {/* header  */}
        <Header></Header>
        {/* banner  */}
        <section className="p-150">
          <div className="container">
            <div className="pb-4 border-bottom border-green">
              <h3 className="text-center text-red fs-1 fw-bold font-goodtime text-uppercase">
                Our work
              </h3>
              <p className="text-darkgreen text-center">HOME / OUR WORK</p>
            </div>
            <div className="p-100">
              <h3 className="textuppercase text-center text-red fs-1 fw-bold font-goodtime">
                Applications
              </h3>
              <p className="text-darkgreen text-center w-50 mx-auto py-2">
                Experience the perfect blend of functionality and design with our application interfaces. Crafted for seamless navigation and effortless interaction, our interfaces are intuitive, user-friendly, and tailored to enhance productivity and engagement. Whether on web or mobile, we prioritize delivering a smooth and consistent experience for all users.
              </p>
            </div>
            <div className="d-flex flex-wrap col-12 justify-content-evenly mx-auto">
              {card.map((item) => {
                // console.log(item);
                return (
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-6 px-2 my-3">
                    <div className="cards h-100 p-4 bg-greenshade5 position-relative rounded-20 border border-success ">
                      <div className="cards-img rounded-20" style={{ height: "350px" }}>
                        <img
                          src={item.img}
                          alt="img"
                          className="w-100 rounded-20 h-100"
                        />
                      </div>
                      <div className="cards-3d w-100 d-inline-block">
                        <div className="cards-content card-front pt-4 bg-green">
                          <div className="d-flex flex-wrap align-items-center">
                            <div>
                              <img
                                src={item.image}
                                alt="image"
                                height={80}
                                className="rounded-20"
                              />
                            </div>
                            <div className="px-4 bg-green">
                              <p className="m-0 fw-bold fs-4 text-darkgreen pb-2">
                                {item.title}
                              </p>
                              <p className="m-0 text-white">{item.text}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card-back w-100">
                          <div className="card-btn">
                            <div className="text-p text-white">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-100">
              <h3 className="textuppercase text-center text-red fs-1 fw-bold font-goodtime">
                Websites
              </h3>
              <p className="text-darkgreen text-center w-50 mx-auto py-2">
                Discover the perfect harmony of design and functionality with our website interfaces. Built for seamless browsing and effortless interaction, our websites are intuitive, visually appealing, and optimized to engage users effectively. Whether for personal or business needs, we deliver a smooth, responsive, and user-centric experience across all devices.
              </p>
            </div>
            <div className="d-flex flex-wrap col-12 justify-content-evenly mx-auto">
              {card2.map((item) => {
                // console.log(item);
                return (
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-12 px-2 my-3 beginbox">
                    <div className="cards p-4 bg-greenshade5 position-relative rounded-20 border border-success" style={{ height: '600px' }}>
                      <div className="cards-img rounded-20 begin-card" style={{ height: '83%' }}>
                        <img
                          src={item.img}
                          alt="img"
                          className="w-100 object-fit-cover rounded-20"
                        />
                      </div>
                      <div className="cards-3d w-100 d-inline-block">
                        <div className="cards-content card-front py-3 bg-green">
                          <div className="d-flex flex-wrap align-items-center">
                            <div>
                              <img
                                src={item.image}
                                alt="image"
                                height={80}
                                className="rounded-20"
                              />
                            </div>
                            <div className=" bg-green" style={{ paddingLeft: "10px" }}>
                              <p className="m-0 fw-bold fs-4 text-darkgreen pb-2">
                                {item.title}
                              </p>
                              <p className="m-0 text-white">{item.text}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card-back w-100">
                          <div className="card-btn">
                            <div className="text-p text-white">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer></Footer>
        <TopBtn></TopBtn>
      </div>
      {/* )} */}
    </div>
  );
};

export default OurWork;
