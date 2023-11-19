import { Add, Cancel, Save } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkillTableContent from "./SkillTableContent";

const skills = [
  { name: "skill 01", image: "01", id: 1 },
  { name: "skill 02", image: "02", id: 2 },
  { name: "skill 03", image: "03", id: 3 },
  { name: "skill 04", image: "04", id: 4 },
  { name: "skill 05", image: "05", id: 5 },
];

const SkillsDashboard = () => {
  const [newSkillBtn, setNewSkillBtn] = useState(false);
  const [editAndnewSkillBtn, setEditAndnewSkillBtn] = useState(false);

  const [editSkillBtn, setEditSkillBtn] = useState(false);
  const [skillTableVisible, setSkillTableVisible] = useState(true);
  const [saveAndCancelBtn, setSaveAndCancelBtn] = useState(false);

  const newSkillBtnHandler = () => {
    setNewSkillBtn(true);
    setSaveAndCancelBtn(true);
    setSkillTableVisible(false);
  };

  const saveSkillBtnHandler = () => {
    setNewSkillBtn(false);
    setSkillTableVisible(true);
    setSaveAndCancelBtn(false);
    setEditAndnewSkillBtn(false);
    setEditSkillBtn(false);
    return;
  };

  const cancelSkillBtnHandlre = () => {
    setNewSkillBtn(false);
    setSaveAndCancelBtn(false);
    setSkillTableVisible(true);
    setEditAndnewSkillBtn(false);
    setEditSkillBtn(false);
  };

  const editSkillBtnHandler = () => {
    setEditSkillBtn(true);
    setSaveAndCancelBtn(true);
    setSkillTableVisible(false);
    setEditAndnewSkillBtn(true);
  };

  const deleteSkillBtnHandler = () => {
    return;
  };
  return (
    <div className=" w-full flex flex-col px-5 gap-5">
      <div className="w-full bg-white flex flex-col  px-5 py-1 rounded-3xl">
        <div className="w-full flex items-center justify-between mb-1">
          <h1 className="lg:text-2xl  text-lg font-bold mb-1">Skills Table</h1>
          {!editAndnewSkillBtn && (
            <Link
              onClick={newSkillBtnHandler}
              className={`${
                newSkillBtn ? "hidden" : ""
              } px-2 py-1 bg-green-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-green-500 transition-all`}
            >
              <Add /> New
            </Link>
          )}
          {saveAndCancelBtn && (
            <div className="flex items-center gap-3">
              <Link
                onClick={saveSkillBtnHandler}
                className={`px-2 py-1 bg-orange-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-orange-500 transition-all`}
              >
                <Save /> <span className="lg:inline-block hidden">Save</span>
              </Link>
              <Link
                onClick={cancelSkillBtnHandlre}
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
        {skillTableVisible && (
          <div
            className={`${
              skillTableVisible ? "" : "hidden"
            } overflow-hidden rounded-lg border border-gray-200 shadow-md my-5`}
          >
            <SkillTableContent
              headNames={["Skill Image", "Skill Name", "Actions"]}
              tableContent={skills}
              editBtnHandler={() => editSkillBtnHandler()}
              deleteBtnHandler={() => deleteSkillBtnHandler()}
            />
          </div>
        )}
        {newSkillBtn && <div>Skill new</div>}
        {editSkillBtn && <div>Skill edit</div>}
      </div>
    </div>
  );
};

export default SkillsDashboard;
