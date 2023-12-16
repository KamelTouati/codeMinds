import React from "react";

export const Schedule = ({ title, date, creator, description }) => {
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="px-6 py-4 flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-black font-semibold">{title}</span>
            <span>{date}</span>
            <span>created by Secretaire {creator}</span>
          </div>
        </td>
        <td class="px-6 py-4">
          <div className="flex gap-2 items">
            <span>{description}</span>
          </div>
        </td>
      </tr>
    </>
  );
};
