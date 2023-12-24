import { Delete, Edit } from "@mui/icons-material";
import React from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const ProjectTable = ({
  projectTableVisible,
  currentPageData,
  projects,
  editProjectBtnHandler,
  deleteProjectBtnHandler,
  recordsPerPage,
  handlePageClick,
}) => {
  return (
    <div
      className={`${
        projectTableVisible ? "" : "hidden"
      } overflow-hidden rounded-lg border border-gray-200 shadow-md my-5`}
    >
      <table
        className="
           min-w-full
           leading-normal
        "
      >
        <thead>
          <tr>
            {[
              "title",
              "link",
              "Skills",
              "Programs",
              "Categories",
              "Actions",
            ].map((name, index) => (
              <th
                key={index}
                className={`lg:px-5
                px-2
                lg:py-3
                py-2
                border-b-2
                border-gray-200
                bg-gray-100
                ${index === 5 ? "text-right" : "text-left"}
                ${index === 4 ? "lg:table-cell hidden" : ""}
                ${index === 3 ? "lg:table-cell hidden" : ""}
                ${index === 2 ? "lg:table-cell hidden" : ""}
                ${index === 1 ? "lg:table-cell hidden " : ""}
                ${index === 0 ? "lg:w-[20%] w-[40%]" : ""} 
                lg:text-xs
                text-[10px]
                font-semibold 
                text-gray-600 
                uppercase 
                tracking-wider`}
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((project, index) => (
            <tr
              key={index}
              className={`
                            ${
                              index === projects.length - 1
                                ? ""
                                : "border-b border-gray-200"
                            }
                            bg-white text-sm
                          `}
            >
              <td className={`lg:table-cell  hidden px-5 py-5 `}>
                <div className="mb-1">{project.projectDetails.title}</div>
                <div className="text-gray-400 text-xs underline">
                  {project.projectDetails.subtitle}
                </div>
              </td>
              <td className={`lg:table-cell hidden px-5 py-5 `}>
                <Link
                  className="bg-green-200 text-green-700 p-1 rounded-xl text-sm font-bold"
                  to={project.projectDetails.link}
                >
                  link
                </Link>
              </td>
              <td className={`lg:table-cell hidden px-5 py-5 `}>
                <div className="flex gap-1 items-center">
                  {project.projectDetails.skills_used.length === 0
                    ? ""
                    : project.projectDetails.skills_used.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-yellow-200 text-sm p-1 rounded-xl text-yellow-700"
                        >
                          {skill.skillName}
                        </div>
                      ))}
                </div>
              </td>
              <td className="lg:hidden  table-cell lg:text-base px-2 text-[10px]">
                <div className="flex flex-col ">
                  <Link to={project.projectDetails.link}>
                    <div className="">{project.projectDetails.title}</div>
                  </Link>
                  <div className="text-[7px] text-gray-400">
                    {project.projectDetails.subtitle}
                  </div>
                </div>
              </td>
              <td className={`lg:table-cell hidden px-5 py-5`}>
                <div className="flex gap-1 items-center">
                  {project.projectDetails.programs.length === 0
                    ? ""
                    : project.projectDetails.programs.map((program, index) => (
                        <div
                          key={index}
                          className="bg-red-200 p-1 text-sm rounded-xl text-red-700"
                        >
                          {program}
                        </div>
                      ))}
                </div>
              </td>
              <td
                className={`lg:table-cell hidden px-5 py-5 lg:text-base text-xs`}
              >
                <div className="flex gap-1 items-center">
                  {project.projectDetails.project_Categories.length === 0
                    ? ""
                    : project.projectDetails.project_Categories.map(
                        (cate, index) => (
                          <div
                            key={index}
                            className="bg-blue-200 p-1 text-sm rounded-xl text-blue-700"
                          >
                            {cate.projectCateName}
                          </div>
                        )
                      )}
                </div>
              </td>
              <td className={`lg:px-5 px-2 lg:py-5 py-2  flex justify-end`}>
                <Link
                  onClick={() =>
                    editProjectBtnHandler(project.projectDetails._id)
                  }
                  className={`p-2 bg-orange-500 text-white rounded-xl mr-2 `}
                >
                  <Edit className="mobile" />
                  <span className="lg:inline-block hidden">Edit</span>
                </Link>
                <Link
                  onClick={() =>
                    deleteProjectBtnHandler(project.projectDetails._id)
                  }
                  className="p-2   bg-red-500 text-white rounded-xl "
                >
                  <Delete className="mobile" />{" "}
                  <span className="lg:inline-block hidden">Delete</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={Math.ceil(projects.length / recordsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        nextLabel="next >"
        previousLabel="< previous"
        activeClassName="active"
      />
    </div>
  );
};

export default ProjectTable;
