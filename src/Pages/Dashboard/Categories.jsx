import { Add, Cancel, Edit, Save } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableContent from "./TableContent";

const Categories = () => {
  const [newSkillCateBtn, setNewSkillCateBtn] = useState(false);
  const [newProjectCateBtn, setNewProjectCateBtn] = useState(false);
  const [editSkillCateBtn, setEditSkillCateBtn] = useState(false);

  const skillsCategories = [
    { skillName: "Frontend", id: 1 },
    { skillName: "Backend", id: 2 },
    { skillName: "Servering", id: 3 },
    { skillName: "Databases", id: 4 },
  ];

  const newSkillCateBtnHandler = () => {
    setNewSkillCateBtn((pre) => !pre);
  };

  const newProjectCateBtnHandler = () => {
    setNewProjectCateBtn((pre) => !pre);
  };

  const skillCateCloseBtnHandler = () => {
    setNewSkillCateBtn(false);
  };

  const projectCateCloseBtnHandler = () => {
    setNewProjectCateBtn(false);
  };

  const editSkillCateBtnHandler = () => {
    setEditSkillCateBtn(true);
  };

  const deleteSkillCateBtnHandler = () => {
    setNewSkillCateBtn(true);
  };

  return (
    <div className=" w-full flex flex-col px-5 gap-5">
      {!newProjectCateBtn && (
        <div className="w-full bg-white flex flex-col  px-5 py-1 rounded-3xl">
          <div className="w-full flex items-center justify-between mb-1">
            <h1 className="text-2xl font-bold mb-1">Skills Categories</h1>
            <Link
              onClick={newSkillCateBtnHandler}
              className={`${
                newSkillCateBtn ? "hidden" : ""
              } px-2 py-1 bg-green-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-green-500 transition-all`}
            >
              <Add /> New
            </Link>
            {newSkillCateBtn && editSkillCateBtn && (
              <div className="flex items-center gap-3">
                <Link
                  className={`px-2 py-1 bg-orange-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-orange-500 transition-all`}
                >
                  <Save /> Save
                </Link>
                <Link
                  onClick={skillCateCloseBtnHandler}
                  className="px-2 py-1 bg-red-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-red-500 transition-all"
                >
                  <Cancel /> Cancel
                </Link>
              </div>
            )}
          </div>
          <div className="w-full h-px rounded-3xl bg-slate-400 mb-1"></div>
          {/*skills cates table*/}
          <div
            className={`${
              newSkillCateBtn ? "hidden" : ""
            } overflow-hidden rounded-lg border border-gray-200 shadow-md my-5`}
          >
            <TableContent
              headNames={["Skill Category Name", "Actions"]}
              tableContent={skillsCategories}
              editBtnHandler={editSkillCateBtnHandler}
              deleteBtnHandler={deleteSkillCateBtnHandler}
            />
          </div>
          {newSkillCateBtn && <div>Skill edit or new</div>}
          {editSkillCateBtn && <div>Skill cate edit</div>}
        </div>
      )}

      {!newSkillCateBtn && (
        <div className="w-full bg-white flex flex-col  px-5 py-1 rounded-3xl">
          <div className="w-full flex items-center justify-between mb-1">
            <h1 className="text-2xl font-bold mb-1">Project Categories</h1>
            <Link
              onClick={newProjectCateBtnHandler}
              className={`${
                newProjectCateBtn ? "hidden" : ""
              } px-2 py-1 bg-green-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-green-500 transition-all`}
            >
              <Add /> New
            </Link>
            {newProjectCateBtn && (
              <div className="flex items-center gap-3">
                <Link
                  className={`px-2 py-1 bg-orange-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-orange-500 transition-all`}
                >
                  <Save /> Save
                </Link>
                <Link
                  onClick={projectCateCloseBtnHandler}
                  className="px-2 py-1 bg-red-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-red-500 transition-all"
                >
                  <Cancel /> Cancel
                </Link>
              </div>
            )}
          </div>
          <div className="w-full h-px rounded-3xl bg-slate-400 mb-1"></div>
          <div className={`${newProjectCateBtn ? "hidden" : ""}`}>table</div>
          {newProjectCateBtn && <div>Project Cate edit or new</div>}
        </div>
      )}
    </div>
  );
};

export default Categories;
