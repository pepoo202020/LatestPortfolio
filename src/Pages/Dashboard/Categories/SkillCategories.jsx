import { Add, Cancel, Save } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableContent from "../TableContent";
import { db } from "../../../Utils/Firebase";
import { onValue, ref } from "firebase/database";

const SkillCategories = () => {
  const [newSkillCateBtn, setNewSkillCateBtn] = useState(false);
  const [editSkillCateBtn, setEditSkillCateBtn] = useState(false);
  const [saveAndCancelBtn, setSaveAndCancelBtn] = useState(false);
  const [skillTableVisible, setSkillTableVisible] = useState(true);
  const [editAndnewSkillCateBtn, setEditAndnewSkillCateBtn] = useState(false);
  const [skillsCategories, setSkillsCategories] = useState([]);

  useEffect(() => {
    const skilldbRef = ref(db, "SkillsCategories");
    // Fetch data using once('value')
    onValue(skilldbRef, (snapshot) => {
      const categories = snapshot.val();
      if (categories) {
        const categoriesArray = Object.keys(categories).map((key) => ({
          id: key,
          ...categories[key],
        }));
        setSkillsCategories(categoriesArray);
      }
    });
  }, []);

  const newSkillCateBtnHandler = () => {
    setEditSkillCateBtn(false);
    setSaveAndCancelBtn(true);
    setSkillTableVisible(false);
    setNewSkillCateBtn(true);
  };

  const saveSkillCateBtnHandler = () => {
    setNewSkillCateBtn(false);
    setSkillTableVisible(true);
    setSaveAndCancelBtn(false);
    setEditAndnewSkillCateBtn(false);
    setEditSkillCateBtn(false);
    return;
  };

  const cancelSkillCateBtnHandlre = () => {
    setNewSkillCateBtn(false);
    setSaveAndCancelBtn(false);
    setSkillTableVisible(true);
    setEditAndnewSkillCateBtn(false);
    setEditSkillCateBtn(false);
  };

  const editSkillCateBtnHandler = () => {
    setEditSkillCateBtn(true);
    setSaveAndCancelBtn(true);
    setSkillTableVisible(false);
    setEditAndnewSkillCateBtn(true);
  };

  const deleteSkillCateBtnHandler = () => {
    return;
  };

  return (
    <div className=" w-full  px-5 ">
      <div className="w-full bg-white flex flex-col  px-5 py-1 rounded-3xl">
        <div className="w-full flex items-center justify-between mb-1">
          <h1 className="lg:text-2xl  text-lg font-bold mb-1">
            Skill Categories
          </h1>
          {!editAndnewSkillCateBtn && (
            <Link
              onClick={newSkillCateBtnHandler}
              className={`${
                newSkillCateBtn ? "hidden" : ""
              } px-2 py-1 bg-green-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-green-500 transition-all`}
            >
              <Add /> New
            </Link>
          )}
          {saveAndCancelBtn && (
            <div className="flex items-center gap-3">
              <Link
                onClick={saveSkillCateBtnHandler}
                className={`px-2 py-1 bg-orange-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-orange-500 transition-all`}
              >
                <Save /> <span className="lg:inline-block hidden">Save</span>
              </Link>
              <Link
                onClick={cancelSkillCateBtnHandlre}
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
            <TableContent
              headNames={["Skill Category Name", "Actions"]}
              tableContent={skillsCategories}
              editBtnHandler={() => editSkillCateBtnHandler()}
              deleteBtnHandler={() => deleteSkillCateBtnHandler()}
            />
          </div>
        )}
        {newSkillCateBtn && <div>Project new</div>}
        {editSkillCateBtn && <div>Project cate edit</div>}
      </div>
    </div>
  );
};

export default SkillCategories;
