import React from "react";
import Announcement from "./components/Announcement";
import { Sidebar, NavbarAuth } from "../../../components";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Announcement = () => {
  const announcements = [
    {
      prof_image: "/images/image.png",
      prof_name: "Azzouaou Faical",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam rerum sequi quo praesentium vero vitae quod laudantium deleniti! Voluptatem culpa esse distinctio natus aliquid dolorem aperiam, blanditiis autem quia!",
      title: "Law interne",
      date: "15/12/2023",
    },
    {
      prof_image: "/images/image.png",
      prof_name: "Azzouaou Faical",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam rerum sequi quo praesentium vero vitae quod laudantium deleniti! Voluptatem culpa esse distinctio natus aliquid dolorem aperiam, blanditiis autem quia!",
      title: "Law interne",
      date: "15/12/2023",
    },
    {
      prof_image: "/images/image.png",
      prof_name: "Azzouaou Faical",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam rerum sequi quo praesentium vero vitae quod laudantium deleniti! Voluptatem culpa esse distinctio natus aliquid dolorem aperiam, blanditiis autem quia!",
      title: "Law interne",
      date: "15/12/2023",
    },
    {
      prof_image: "/images/image.png",
      prof_name: "Azzouaou Faical",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam rerum sequi quo praesentium vero vitae quod laudantium deleniti! Voluptatem culpa esse distinctio natus aliquid dolorem aperiam, blanditiis autem quia!",
      title: "Law interne",
      date: "15/12/2023",
    },
  ];
  return (
    <>
      <NavbarAuth />
      <Sidebar />
      <div class="p-4 sm:ml-64">
        <div className="flex flex-col">
          <div>
            <h1 className="text-xl font-semibold my-4">Modules Progress</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-[#F8FBFF] p-4 rounded-xl border border-gray-200">
              <div className="flex gap-4">
                <div>
                  <img className="w-[100px]" src="/images/image.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="flex-1">
                    <input
                      type="text"
                      id="large-input"
                      placeholder="make an announcement"
                      class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex">
                    <div className="flex my-5">
                      <Link
                        to="/login"
                        type="button"
                        className="buttonStyle2 flex items-center gap-4 text-white p-2"
                      >
                        Post
                        <FaRegArrowAltCircleRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {announcements.map((item, index) => (
              <Announcement
                key={index}
                prof_image={item.prof_image}
                prof_name={item.prof_name}
                description={item.description}
                title={item.title}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
