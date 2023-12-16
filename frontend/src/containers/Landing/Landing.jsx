import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// import Card from "./components/Card";
const Card = ({ name, description }) => {
  return (
    <div
      data-aos="slide-up"
      className="max-w-sm bg-color4 border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center p-4"
    >
      <div className="rounded-xl text-white bg-[#4318FF] flex items-center justify-center p-4">
        <FaUserAlt />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-color7">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal font-semibold text-[#68769F]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Landing() {
  const cards = [
    {
      name: "Administrator",
      description: "Description for Item 1.",
    },
    {
      name: "Teacher",
      description: "Description for Item 2.",
    },
    {
      name: "Staff",
      description: "Description for Item 3.",
    },
    {
      name: "Student",
      description: "Description for Item 3.",
    },
  ];
  return (
    <>
      {/* === first section === */}
      <div className="relative">
        <img
          className="absolute left-0 top-0 -z-1"
          src="/images/vector.svg"
          alt=""
        />
        <div className="flex md:flex-row flex-col relative items-start px-5 md:px-20 z-10 py-20 overflow-visible">
          <img
            className="absolute right-0 bottom-0 -z-1"
            src="/images/vector1.svg"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold text-color7 my-5">
              Your platform to connect inside your university
            </h1>
            <h4 className="my-8 leading-10 font-semibold text-[#68769F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              officia ea eligendi vel pariatur, laborum odit natus accusamus
              earum veniam distinctio quis debitis ipsam beatae amet nulla
              corrupti error. Aliquid.
            </h4>
            <div className="flex my-5">
              <Link
                to="/login"
                type="button"
                className="buttonStyle2 flex items-center gap-4 text-white p-2"
              >
                Start
                <FaRegArrowAltCircleRight />
              </Link>
            </div>
          </div>
          <div>
            <img className="w-[1500px]" src="/images/bg.svg" alt="" />
          </div>
        </div>
        {/* === end first section === */}
        {/* === second section === */}
        <div className="px-5 md:px-20 my-10 relative">
          <h1
            data-aos="slide-up"
            className="text-5xl text-color7 font-semibold my-5"
          >
            Our problem
          </h1>
          <h4 data-aos="slide-up" className="my-5">
            Teachers in universities often grapple with communication
            inefficiencies, fragmented collaboration tools, and the need for
            streamlined platforms to enhance information sharing and
            coordination, hindering their ability to create a seamless and
            collaborative educational environment
          </h4>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 my-10">
            {cards.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/* === end second section === */}
        {/* === third section === */}
        <div className="px-5 lg:py-10 md:px-20 my-10 relative bg-color3 flex items-content flex-col">
          <h1
            data-aos="slide-up"
            className="text-5xl text-white font-semibold text-center"
          >
            How Horizon solves the problem?
          </h1>
          <h1
            data-aos="slide-up"
            className="text-5xl text-white text-sm my-5 text-center"
          >
            Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 my-10">
            {/* === item === */}
            <div
              data-aos="slide-up"
              className="max-w-sm text-white flex flex-row items-start justify-center"
            >
              <div className="rounded-full bg-[#4318FF] flex items-center justify-center">
                <h1 className="mx-5 my-3">1</h1>
              </div>
              <div className="px-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight">
                    Create your Account
                  </h5>
                </a>
                <p className="mb-3 font-normal ">
                  Condimentum vit pellemsque habitant morbi at molestie.
                </p>
              </div>
              <MdOutlineKeyboardArrowRight className="text-white text-5xl" />
            </div>
            {/* === end item === */}
            {/* === item === */}
            <div
              data-aos="slide-up"
              className="max-w-sm text-[#4318FF] flex flex-row items-start justify-center"
            >
              <div className="rounded-full border border-[#4318FF] flex items-center justify-center">
                <h1 className="mx-5 my-3">2</h1>
              </div>
              <div className="px-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight">
                    Setup your Account
                  </h5>
                </a>
                <p className="mb-3 font-normal ">
                  Condimentum vit pellemsque habitant morbi at molestie.
                </p>
              </div>
              <MdOutlineKeyboardArrowRight className="text-white text-5xl" />
            </div>
            {/* === end item === */}
            {/* === item === */}
            <div
              data-aos="slide-up"
              className="max-w-sm text-[#4318FF] flex flex-row items-start justify-center"
            >
              <div className="rounded-full border border-[#4318FF] flex items-center justify-center">
                <h1 className="mx-5 my-3">3</h1>
              </div>
              <div className="px-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight">
                    connect with your team
                  </h5>
                </a>
                <p className="mb-3 font-normal ">
                  Condimentum vit pellemsque habitant morbi at molestie.
                </p>
              </div>
              {/* <MdOutlineKeyboardArrowRight className="text-white text-5xl" /> */}
            </div>
            {/* === end item === */}
          </div>
        </div>
        {/* === end third section === */}
      </div>
    </>
  );
}
