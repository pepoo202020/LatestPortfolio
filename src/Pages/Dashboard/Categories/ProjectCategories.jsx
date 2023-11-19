import { Add, Cancel, Save } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableContent from "../TableContent";

const projectsCategories = [
  { skillName: "Frontend", id: 1 },
  { skillName: "Backend", id: 2 },
  { skillName: "Servering", id: 3 },
  { skillName: "Databases", id: 4 },
];

const ProjectCategories = () => {
  const [newProjectCateBtn, setNewProjectCateBtn] = useState(false);
  const [editAndnewProjectCateBtn, setEditAndnewProjectCateBtn] =
    useState(false);

  const [editProjectCateBtn, setEditProjectCateBtn] = useState(false);
  const [projectTableVisible, setProjectTableVisible] = useState(true);
  const [saveAndCancelBtn, setSaveAndCancelBtn] = useState(false);
  const newProjectCateBtnHandler = () => {
    setNewProjectCateBtn(true);
    setSaveAndCancelBtn(true);
    setProjectTableVisible(false);
  };

  const saveProjectCateBtnHandler = () => {
    setNewProjectCateBtn(false);
    setProjectTableVisible(true);
    setSaveAndCancelBtn(false);
    setEditAndnewProjectCateBtn(false);
    setEditProjectCateBtn(false);
    return;
  };

  const cancelProjectCateBtnHandlre = () => {
    setNewProjectCateBtn(false);
    setSaveAndCancelBtn(false);
    setProjectTableVisible(true);
    setEditAndnewProjectCateBtn(false);
    setEditProjectCateBtn(false);
  };

  const editProjectCateBtnHandler = () => {
    setEditProjectCateBtn(true);
    setSaveAndCancelBtn(true);
    setProjectTableVisible(false);
    setEditAndnewProjectCateBtn(true);
  };

  const deleteProjectCateBtnHandler = () => {
    return;
  };
  return (
    <div className=" w-full px-5 ">
      <div className="w-full bg-white flex flex-col  px-5 py-1 rounded-3xl">
        <div className="w-full flex items-center justify-between mb-1">
          <h1 className="lg:text-2xl  text-lg font-bold mb-1">
            Project Categories
          </h1>
          {!editAndnewProjectCateBtn && (
            <Link
              onClick={newProjectCateBtnHandler}
              className={`${
                newProjectCateBtn ? "hidden" : ""
              } px-2 py-1 bg-green-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-green-500 transition-all`}
            >
              <Add /> New
            </Link>
          )}
          {saveAndCancelBtn && (
            <div className="flex items-center gap-3">
              <Link
                onClick={saveProjectCateBtnHandler}
                className={`px-2 py-1 bg-orange-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-orange-500 transition-all`}
              >
                <Save /> <span className="lg:inline-block hidden">Save</span>
              </Link>
              <Link
                onClick={cancelProjectCateBtnHandlre}
                className="px-2 py-1 bg-red-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-red-500 transition-all"
              >
                <Cancel />{" "}
                <span className="lg:inline-block hidden">Cancel</span>
              </Link>
            </div>
          )}
        </div>
        <div className="w-full h-px rounded-3xl bg-slate-400 mb-1"></div>
        {/*skills cates table*/}
        {projectTableVisible && (
          <div
            className={`${
              projectTableVisible ? "" : "hidden"
            } overflow-hidden rounded-lg border border-gray-200 shadow-md my-5`}
          >
            <TableContent
              headNames={["Project Category Name", "Actions"]}
              tableContent={projectsCategories}
              editBtnHandler={() => editProjectCateBtnHandler()}
              deleteBtnHandler={() => deleteProjectCateBtnHandler()}
            />
          </div>
        )}
        {newProjectCateBtn && <div>Project new</div>}
        {editProjectCateBtn && <div>Project cate edit</div>}
      </div>
    </div>
  );
};

export default ProjectCategories;
