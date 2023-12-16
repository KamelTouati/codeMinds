// import React from "react";
// import Announcement from "./components/Announcement";
// import { Sidebar, NavbarAuth } from "../../../components";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { PiUploadSimple,PiFilePdfDuotone } from "react-icons/pi";

const Announcement = ({ prof_image, prof_name, description, title, date }:any) => {
  return (
    <div className="bg-[#F8FBFF] flex justify-between items-center p-4 rounded-xl border border-gray-200">
      <div className="flex gap-4">
        <div>
          <img className="w-[100px]" src={prof_image} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 items-end pb-2">
            <h1 className="text-3xl font-bold">{prof_name}</h1>
            <h1 className="text-sm font-normal">{date}</h1>
          </div>
          <span className="font-normal">{description}</span>
          <div className="flex justify-between bg-[#734AE5]/10 rounded-lg p-4 my-2">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="flex gap-2 items-center text-red-700 font-medium">
                <PiFilePdfDuotone/>
                <span>PV-S1.pdf</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminAnnouncement = () => {
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
      <div className="p-4 m-4 border-[1px] rounded-xl shadow-sm">
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
                    <textarea
                      
                      id="large-input"
                      placeholder="make an announcement"
                      className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
                      rows={4}
                      cols={180}
                      
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <button>
                        <PiUploadSimple size={28}/>
                    </button>
                    <div className="flex my-5">
                      <button
                        type="button"
                        className="buttonStyle2 flex items-center gap-4 bg-[#5A3FE0] font-medium text-xl py-2 px-5 rounded-xl text-white p-2"
                      >
                        Post
                        <FaRegArrowAltCircleRight />
                      </button>
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

export default AdminAnnouncement;
