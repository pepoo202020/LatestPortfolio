import { Delete, Edit } from "@mui/icons-material";
import React from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const SkillTable = ({
  skillTableVisible,
  currentPageData,
  skills,
  editSkillBtnHandler,
  deleteSkill,
  recordsPerPage,
  handlePageClick,
}) => {
  return (
    <div
      className={`${
        skillTableVisible ? "" : "hidden"
      } overflow-hidden rounded-lg border border-gray-200 shadow-md my-5 `}
    >
      <table
        className="
               min-w-full
               leading-normal
            "
      >
        <thead>
          <tr>
            {["Skill Image", "Skill Name", "Skill Category", "Actions"].map(
              (name, index) => (
                <th
                  key={index}
                  className={`lg:px-5
                        px-2
                        lg:py-3
                        py-2
                        border-b-2
                        border-gray-200
                        bg-gray-100
                        ${index === 3 ? "text-right" : "text-left"}
                        ${index === 2 ? "lg:block hidden" : ""}
                        ${index === 0 ? "lg:w-[10%] w-[30%]" : ""} 
                        text-xs
                        font-semibold 
                        text-gray-600 
                        uppercase 
                        tracking-wider`}
                >
                  {name}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {currentPageData.map((skill, index) => (
            <tr
              key={index}
              className={` ${
                index === skills.length - 1 ? "" : "border-b border-gray-200"
              } bg-white
              text-sm`}
            >
              <td
                className={`lg:py-5 py-2 lg:px-8 px-6 items-center justify-center`}
              >
                <div className="flex-shrink-0 w-10 h-10 ">
                  <img src={skill.skillImage} alt={skill._id} />
                </div>
              </td>
              <td className={`lg:table-cell hidden px-5 py-5 `}>
                {skill.skillName}
              </td>
              <td className={`lg:table-cell hidden px-5 py-5 `}>
                {skill.skillCategory.skillCategoryName}
              </td>
              <td className="lg:hidden  table-cell ">
                <div className="">{skill.skillName}</div>
                <div className="text-[12px] text-gray-400">
                  {skill.skillCategory.skillCategoryName}
                </div>
              </td>
              <td className={`lg:px-5 px-2 lg:py-5 py-2  flex justify-end`}>
                <Link
                  onClick={() => editSkillBtnHandler(skill._id)}
                  className={`p-2   bg-orange-500 text-white rounded-xl mr-2 `}
                >
                  <Edit className="mobile" />
                  <span className="lg:inline-block hidden">Edit</span>
                </Link>
                <Link
                  onClick={() => deleteSkill(skill._id)}
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
        pageCount={Math.ceil(skills.length / recordsPerPage)}
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

export default SkillTable;
