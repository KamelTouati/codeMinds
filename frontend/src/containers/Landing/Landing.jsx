import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "AI PLATFORM",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "YOU WANT TO COLLABORATE IN A PROJECT",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "YOU SEARCH FOR CONTBUTERS TO JOIN IN YOUR PROJECT",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
export default function Landing() {
  return (
    <>
      {/* === first section === */}
      <div className="relative">
        <img
          className="absolute right-0 top-0 -z-1"
          src="/images/bg.svg"
          alt=""
        />
        <img
          className="absolute -left-[100px] w-[150px] top-0 my-5 -z-1"
          src="/images/1.png"
          alt=""
        />
        <img
          className="absolute right-[50px] w-[100px] top-[400px] my-5 -z-1"
          src="/images/2.png"
          alt=""
        />
        <div className="flex md:flex-row flex-col relative items-center px-5 md:px-20 z-10 py-10">
          <div>
            <h1 className="leading-10 text-xl font-black my-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
              <ExampleComponent />
            </h1>
            <h1 className="text-3xl font-black my-5">
              join us in
              <span className="mx-2 text-5xl font-black my-5 text-[#62CDFF]">
                <span className="text-[#AA77FF]">Scilo</span>scope
              </span>
            </h1>
            <h4 className="my-10">
              Sciloscope is a cutting-edge platform connecting scientists
              seeking collaboration with project managers in need of skilled
              researchers. Our mission: unite scientific minds, advance
              knowledge, and drive impactful research.
            </h4>
            <div className="flex my-5">
              <Link
                to="/login"
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Project manager
              </Link>
              <Link
                to="/login"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Collaborator
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="w-[1000px]"
              src="/images/illustration1.gif"
              alt=""
            />
          </div>
        </div>
        {/* === end first section === */}
        {/* === second section === */}
        <div className="px-5 md:px-20 my-20 relative">
          <h1 data-aos="slide-up" className="text-5xl font-lg my-5">
            Where science meets collaboration
          </h1>
          <h4 data-aos="slide-up" className="my-5">
            Explore diverse scientific fields, from advanced materials to
            environmental sustainability. Browse projects, connect with
            managers, and make an impact on breakthroughs
          </h4>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 my-10">
            <div
              data-aos="slide-up"
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                {/* <img className="rounded-t-lg" src={illustration} alt="" /> */}
                <img
                  class="rounded-t-lg"
                  src="/images/illustration5.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    AI-Powered Natural Language Processing
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Join our team of computer scientists and machine learning
                  enthusiasts to work on an exciting project involving the
                  development of cutting-edge Natural Language Processing (NLP)
                  algorithms
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              data-aos="slide-up"
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="/images/illustration6.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Smart Home Automation System
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Join our innovative smart home automation project! Enhance
                  energy efficiency, security, and convenience in modern homes
                  with our electrical engineering team. Design and implement
                  smart sensors
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              data-aos="slide-up"
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/images/illustration7.svg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    AI-Driven Language Translation Platform
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Join our cutting-edge project focused on developing an
                  AI-driven language translation platform. We aim to break
                  language barriers and enable seamless communication worldwide.
                  Collaborate with our team of machine learning engineers and
                  natural language processing experts to create a revolutionary
                  translation tool. Skills Needed: Machine Learning, Natural
                  Language Processing, Software Development, Data Science
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* === end second section === */}
        {/* === third section === */}
        <div
          data-aos="slide-up"
          className="px-5 md:px-20 my-10 relative flex flex-col md:flex-row overflow-x-hidden"
        >
          <div>
            <h1 className="text-3xl font-black my-5">
              Join us as a
              <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                product manager
              </span>
            </h1>
            <h4 className="text-2xl my-10">
              Sciloscope is the ideal platform to showcase your projects and
              connect with skilled researchers and scientists. Whether you're
              working on cutting-edge materials research, environmental
              sustainability studies, or biomedical breakthroughs, Sciloscope
              offers a vibrant community of potential collaborators.
            </h4>
            <Link
              to="/register"
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Continue
            </Link>
          </div>
          <div>
            <img
              className="w-[1000px]"
              src="/images/illustration4.jpg"
              alt=""
            />
          </div>
          <img
            className="absolute -right-[200px] bottom-0 w-[300px] -z-1"
            src="https://cdn.dribbble.com/users/974517/screenshots/11232624/media/aa363d3ade5edf38d86e536d76f643e5.gif"
            alt=""
          />
        </div>
        {/* === end third section === */}
        {/* === 4th section === */}

        <div
          data-aos="slide-up"
          className="px-5 md:px-20 my-10 relative flex flex-col md:flex-row"
        >
          <div>
            <img
              className="w-[1000px]"
              src="/images/illustration3.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-black my-5">
              Join us as a
              <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                collaborator
              </span>
            </h1>
            <h4 className="text-2xl my-10">
              Unlock a world of scientific opportunities as a user on
              Sciloscope. Join us to explore exciting projects, connect with
              project managers, and contribute your expertise to groundbreaking
              research. Your passion for science can make a real difference
              here.
            </h4>
            <Link
              to="/register"
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Continue
            </Link>
          </div>
          <img
            className="absolute -left-[200px] bottom-0 w-[300px] -z-1"
            src="https://cdn.dribbble.com/users/974517/screenshots/11232624/media/aa363d3ade5edf38d86e536d76f643e5.gif"
            alt=""
          />
        </div>
        {/* === end 4th section === */}
      </div>
    </>
  );
}
