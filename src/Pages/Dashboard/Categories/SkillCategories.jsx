import { Add, Cancel, Delete, Edit, Save } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
    const fetchSkills = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/cates/skills/all"
        );
        setSkillsCategories(response.data.skillCategories);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("error", error.response.data);
      }
    };
    fetchSkills();
  }, [skillsCategories]);

  const newSkillCateBtnHandler = () => {
    setEditSkillCateBtn(false);
    setSaveAndCancelBtn(true);
    setSkillTableVisible(false);
    setNewSkillCateBtn(true);
  };

  const saveSkillCateBtnHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2000/api/cates/skills/new",
        { categoryName: categoryName }
      );
      alert(response.data.message);
      setNewSkillCateBtn(false);
      setSkillTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewSkillCateBtn(false);
      setEditSkillCateBtn(false);
      setCategoryName("");
    } catch (error) {
      console.error("error", error.response.data);
    }
  };

  const cancelSkillCateBtnHandlre = () => {
    setNewSkillCateBtn(false);
    setSaveAndCancelBtn(false);
    setSkillTableVisible(true);
    setEditAndnewSkillCateBtn(false);
    setEditSkillCateBtn(false);
  };

  const editAndSaveCateHandler = async () => {
    try {
      const response = await axios.put(
        `http://localhost:2000/api/cates/skills/${cateID}`,
        { categoryName: categoryName }
      );
      alert(response.data.message);
      setNewSkillCateBtn(false);
      setSkillTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewSkillCateBtn(false);
      setEditSkillCateBtn(false);
      setCategoryName("");
    } catch (error) {
      console.error("error", error.response.data);
    }
  };

  const editSkillCateBtnHandler = (id) => {
    setCateID(id);
    setEditSkillCateBtn(true);
    setSaveAndCancelBtn(true);
    setSkillTableVisible(false);
    setEditAndnewSkillCateBtn(true);
    setCategoryName("");
  };

  const deleteSkillCateBtnHandler = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:2000/api/cates/skills/${id}`
      );
      alert(response.data.message);
    } catch (error) {
      alert("error", error.response.data);
    }
  };

  if (loading) {
    return (
      <div className=" w-full  px-5 ">
        <div className="w-full bg-white flex flex-col  px-5 py-1 rounded-3xl">
          <div className="w-full flex items-center justify-center mb-1">
            <h1 className="lg:text-2xl  text-lg font-bold mb-1">
              Loading Skill Categories
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full  lg:px-5  px-2">
      <div className="w-full bg-white flex flex-col  lg:px-5 px-2 py-1 rounded-3xl">
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
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                          onClick={() => deleteSkillCateBtnHandler(content._id)}
                          className="p-2   bg-red-500 text-white rounded-xl "
                        >
                          <Delete className="mobile" />{" "}
                          <span className="lg:inline-block hidden">Delete</span>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
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
