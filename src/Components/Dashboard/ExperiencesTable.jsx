import React from "react";
import { Link } from "react-router-dom";
import { convertDate } from "../../Utils/util";
import { Cancel, Delete, Edit } from "@mui/icons-material";
import StyledButton from "../StyledButton";

const ExperiencesTable = ({
  experienceTableVisible,
  experiences,
  openHandler,
  modal,
  setModal,
  editExperienceBtnHandler,
  deleteExperienceBtnHandler,
}) => {
  return (
    <div
      className={`${
        experienceTableVisible ? "" : "hidden"
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
              "Company Name",
              "location",
              "Start Date",
              "End Date",
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
          {experiences.map((experience, index) => (
            <tr
              key={index}
              className={`
                            ${
                              index === experiences.length - 1
                                ? ""
                                : "border-b border-gray-200"
                            }
                            bg-white text-sm
                          `}
            >
              <td className={`lg:table-cell hidden px-5 py-5 `}>
                <Link onClick={() => openHandler}>{experience.title}</Link>
                {modal && (
                  <div className="absolute top-0 left-0 bg-slate-400/30 w-screen h-screen flex items-center justify-center">
                    <div className="bg-white max-w-3xl relative rounded-2xl shadow p-5 flex flex-col items-center">
                      <div
                        onClick={() => setModal(false)}
                        className="w-5 h-5 rounded-full cursor-pointer  absolute top-2 right-2"
                      >
                        <Cancel />
                      </div>

                      <h1 className="text-lg mb-5 font-bold">
                        {experience.title}
                      </h1>
                      <h1 className="text-sm mb-1 font-semibold text-slate-400 underline">
                        <Link to={experience.companyLink}>
                          {experience.company}
                        </Link>
                      </h1>
                      <h1 className="text-xs mb-5 font-semibold text-slate-400 underline">
                        {experience.location}
                      </h1>
                      <div className="w-full mb-5 flex items-center justify-between">
                        <h1 className="text-xs font-semibold text-black underline">
                          {convertDate(experience.startDate)}
                        </h1>
                        <h1 className="text-xs font-semibold text-black underline">
                          {experience.stillPresent
                            ? "Still Present"
                            : convertDate(experience.endDate)}
                        </h1>
                      </div>
                      <p>{experience.description}</p>
                    </div>
                  </div>
                )}
              </td>
              <td className={`lg:table-cell hidden px-5 py-5 `}>
                <Link to={experience.companyLink}>{experience.company}</Link>
              </td>
              <td className={`lg:table-cell hidden px-5 py-5 `}>
                {experience.location}
              </td>
              <td className="lg:hidden  table-cell lg:text-base text-[10px]">
                <div className="">{experience.title}</div>
                <div className="text-[7px] text-gray-400">
                  <Link to={experience.companyLink}>{experience.company}</Link>
                </div>
              </td>
              <td className={` px-5 py-5 lg:text-base text-xs`}>
                {convertDate(experience.startDate)}
              </td>
              <td
                className={`lg:table-cell hidden px-5 py-5 lg:text-base text-xs`}
              >
                {experience.stillPresent
                  ? "Present"
                  : convertDate(experience.endDate)}
              </td>
              <td className={`lg:px-5 px-2 lg:py-5 py-2  flex justify-end`}>
                <Link
                  onClick={() => editExperienceBtnHandler(experience._id)}
                  className={`p-2   bg-orange-500 text-white rounded-xl mr-2 `}
                >
                  <Edit className="mobile" />
                  <span className="lg:inline-block hidden">Edit</span>
                </Link>
                <Link
                  onClick={() => deleteExperienceBtnHandler(experience._id)}
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
    </div>
  );
};

export default ExperiencesTable;
