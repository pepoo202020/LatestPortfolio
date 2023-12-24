import { Add, Cancel, Delete, Edit, Save } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../SkillTable.css";
import CateNew from "./CateNew";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  createNewSkillCategory,
  deleteSkillCategory,
  fetchSkillsCate,
  getASkillCategory,
  updateSkillCategory,
} from "../../../Utils/databaseConnect";
import {
  cancelBtnHandlre,
  editAndSaveHandler,
  editBtnHandler,
  newBtnHandler,
  saveBtnHandler,
} from "../../../Utils/util";
import Loader from "../../../Components/Loader";

const SkillCategories = () => {
  const [newSkillCateBtn, setNewSkillCateBtn] = useState(false);
  const [editSkillCateBtn, setEditSkillCateBtn] = useState(false);
  const [saveAndCancelBtn, setSaveAndCancelBtn] = useState(false);
  const [skillTableVisible, setSkillTableVisible] = useState(true);
  const [editAndnewSkillCateBtn, setEditAndnewSkillCateBtn] = useState(false);
  const [skillsCategories, setSkillsCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [cateID, setCateID] = useState("");

  const onChange = (event) => {
    setCategoryName(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const fetchedSkillsCate = await fetchSkillsCate();
      setSkillsCategories(fetchedSkillsCate);
    };
    fetch();
    setLoading(false);
  }, [skillsCategories]);

  const saveSkillCateBtnHandler = async () => {
    createNewSkillCategory(categoryName);
    saveBtnHandler(
      "skillCate",
      setNewSkillCateBtn,
      setSaveAndCancelBtn,
      setSkillTableVisible,
      setEditSkillCateBtn,
      setEditAndnewSkillCateBtn,
      "",
      "",
      "",
      setCategoryName
    );
  };

  const editAndSaveCateHandler = async () => {
    updateSkillCategory(categoryName, cateID);
    editAndSaveHandler(
      "skillCate",
      setNewSkillCateBtn,
      setSaveAndCancelBtn,
      setSkillTableVisible,
      setEditSkillCateBtn,
      setEditAndnewSkillCateBtn,
      "",
      "",
      "",
      setCategoryName
    );
  };

  const editSkillCateBtnHandler = async (id) => {
    const gettedSkillCategory = await getASkillCategory(id);
    setCategoryName(gettedSkillCategory);
    editBtnHandler(
      "skillCate",
      setSaveAndCancelBtn,
      setSkillTableVisible,
      setEditSkillCateBtn,
      setEditAndnewSkillCateBtn,
      setCateID,
      id
    );
  };

  return (
    <div className=" w-full  lg:px-5  px-2">
      <div className="w-full bg-white flex flex-col  lg:px-5 px-2 py-1 rounded-3xl">
        <div className="w-full flex items-center justify-between mb-1">
          <h1 className="lg:text-2xl  text-lg font-bold mb-1">
            Skill Categories
          </h1>
          {!editAndnewSkillCateBtn && (
            <Link
              onClick={() =>
                newBtnHandler(
                  "skillCate",
                  setNewSkillCateBtn,
                  setSaveAndCancelBtn,
                  setSkillTableVisible,
                  setEditAndnewSkillCateBtn,
                  "",
                  "",
                  "",
                  setCategoryName
                )
              }
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
                onClick={
                  editSkillCateBtn
                    ? editAndSaveCateHandler
                    : saveSkillCateBtnHandler
                }
                className={`px-2 py-1 bg-orange-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-orange-500 transition-all`}
              >
                <Save /> <span className="lg:inline-block hidden">Save</span>
              </Link>
              <Link
                onClick={() =>
                  cancelBtnHandlre(
                    "skillCate",
                    setNewSkillCateBtn,
                    setSaveAndCancelBtn,
                    setSkillTableVisible,
                    setEditSkillCateBtn,
                    setEditAndnewSkillCateBtn,
                    "",
                    "",
                    "",
                    setCategoryName
                  )
                }
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
        {loading ? (
          <Loader />
        ) : (
          skillTableVisible && (
            <div
              className={`${
                skillTableVisible ? "" : "hidden"
              } overflow-hidden rounded-lg border border-gray-200 shadow-md my-5`}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {["Skill Category Name", "Actions"].map((name, index) => (
                        <TableCell
                          key={index}
                          align={`${index === 1 ? "right" : "left"}`}
                          className={`${index === 1 ? "text-center" : ""}`}
                        >
                          {name}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {skillsCategories.map((content, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {content.skillCategoryName}
                        </TableCell>
                        <TableCell align="right">
                          <Link
                            onClick={() => editSkillCateBtnHandler(content._id)}
                            className={`p-2   bg-orange-500 text-white rounded-xl mr-2 `}
                          >
                            <Edit className="mobile" />
                            <span className="lg:inline-block hidden">Edit</span>
                          </Link>
                          <Link
                            onClick={() => deleteSkillCategory(content._id)}
                            className="p-2   bg-red-500 text-white rounded-xl "
                          >
                            <Delete className="mobile" />{" "}
                            <span className="lg:inline-block hidden">
                              Delete
                            </span>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )
        )}
        {newSkillCateBtn && (
          <div className="p-2 w-full">
            <CateNew
              categoryName={categoryName}
              label="Skill Category"
              onChange={onChange}
            />
          </div>
        )}
        {editSkillCateBtn && (
          <div className="p-2 w-full">
            <CateNew
              categoryName={categoryName}
              label="Skill Category"
              onChange={onChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCategories;
