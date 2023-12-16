import React from "react";

const Module = ({ module_name, module_image, module_resp }) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={module_image} alt="" />
      </a>
      <div class="p-5 flex gap-4 items-center">
        <div class="progress-bar">
          <progress
            value={75}
            min={0}
            max={100}
            style={{ visibility: "hidden", height: 0, width: 0 }}
          >
            75%
          </progress>
        </div>
        <div>
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {module_name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Responsable : <br />
            {module_resp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Module;
