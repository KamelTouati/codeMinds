import React from "react";
import AnnouncementComponent from "./components/AnnouncementComponent";
import { Sidebar, NavbarAuth } from "../../components";
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
            {announcements.map((item, index) => (
              <AnnouncementComponent
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
