import React from "react";
// import { Sidebar, NavbarAuth } from "../../components";
import { Link } from "react-router-dom";
import Module from "./components/Module";

const ModuleStudent = () => {
  const modules = [
    {
      module_image: "/images/datascience.jpg",
      module_name: "Data Science",
      module_resp: "Berbuague Chemseddine ",
    },
    {
      module_image: "/images/datascience.jpg",
      module_name: "Analyse de donnees",
      module_resp: "Kherbachi",
    },
    {
      module_image: "/images/datascience.jpg",
      module_name: "BDDA",
      module_resp: "Bouglimina",
    },
    {
      module_image: "/images/datascience.jpg",
      module_name: "Anglais",
      module_resp: "Chemseddine Berbeugue",
    },
    {
      module_image: "/images/datascience.jpg",
      module_name: "Complexity",
      module_resp: "Chemseddine Berbeugue",
    },
  ];
  return (
    <>

      <div class="p-4 sm:ml-64">
        <div className="flex flex-col">
          <div className="my-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Modules</h1>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {modules.map((item, index) => (
              <Module
                key={index}
                module_image={item.module_image}
                module_name={item.module_name}
                module_resp={item.module_resp}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ModuleStudent;
