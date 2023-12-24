import React from "react";

const ProjectCatesSelector = ({ setter, arr }) => {
  return (
    <select
      onChange={(e) => setter(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value={""}>Categories</option>
      {arr.map((item, index) => (
        <option value={item.projectCateName} key={index}>
          {item.projectCateName}
        </option>
      ))}
    </select>
  );
};

export default ProjectCatesSelector;
