import React from "react";

const Card = ({ year, nmbr_student, progress_module, finished }) => {
  return (
    <>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {year}
          </h5>
        </a>
        <div className="flex gap-2">
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
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nmbr_student} Students
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {progress_module} Modules in progress
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {finished} finished
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
