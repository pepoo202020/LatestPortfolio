import { Add, Cancel, Delete, Edit, Save } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../SkillTable.css";
import CateNew from "./CateNew";
import axios from "axios";
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
  createNewProjectCategory,
  deleteProjectCategory,
  fetchProjectCategories,
  getAProjectCategory,
  updateProjectCategory,
} from "../../../Utils/databaseConnect";
import {
  cancelBtnHandlre,
  editAndSaveHandler,
  editBtnHandler,
  newBtnHandler,
  saveBtnHandler,
} from "../../../Utils/util";

const ProjectCategories = () => {
  const [newProjectCateBtn, setNewProjectCateBtn] = useState(false);
  const [editAndnewProjectCateBtn, setEditAndnewProjectCateBtn] =
    useState(false);
  const [projectsCategories, setProjectsCategories] = useState([]);
  const [editProjectCateBtn, setEditProjectCateBtn] = useState(false);
  const [projectTableVisible, setProjectTableVisible] = useState(true);
  const [saveAndCancelBtn, setSaveAndCancelBtn] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [cateID, setCateID] = useState("");
  const [loading, setLoading] = useState(true);

  const onChange = (event) => {
    setCategoryName(event.target.value);
  };

  useEffect(() => {
    setLoading(true);

    const fetchProjects = async () => {
      const fetchedCategory = await fetchProjectCategories();
      setProjectsCategories(fetchedCategory);
    };
    fetchProjects();
    setLoading(false);
  }, [projectsCategories]);

  const saveProjectCateBtnHandler = async () => {
    createNewProjectCategory(categoryName);
    saveBtnHandler(
      "projectCate",
      setNewProjectCateBtn,
      setSaveAndCancelBtn,
      setProjectTableVisible,
      setEditProjectCateBtn,
      setEditAndnewProjectCateBtn,
      "",
      "",
      "",
      setCategoryName
    );
  };

  const editAndSaveCateHandler = async () => {
    updateProjectCategory(categoryName, cateID);
    editAndSaveHandler(
      "projectCate",
      setNewProjectCateBtn,
      setSaveAndCancelBtn,
      setProjectTableVisible,
      setEditProjectCateBtn,
      setEditAndnewProjectCateBtn,
      "",
      "",
      "",
      setCategoryName
    );
  };

  const editProjectCateBtnHandler = async (id) => {
    const fetchedCategory = await getAProjectCategory(id);
    setCategoryName(fetchedCategory);
    editBtnHandler(
      "projectCate",
      setSaveAndCancelBtn,
      setProjectTableVisible,
      setEditProjectCateBtn,
      setEditAndnewProjectCateBtn,
      setCateID,
      id
    );
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
    <div className=" w-full px-5 ">
      <div className="w-full bg-white flex flex-col  px-5 py-1 rounded-3xl">
        <div className="w-full flex items-center justify-between mb-1">
          <h1 className="lg:text-2xl  text-lg font-bold mb-1">
            Project Categories
          </h1>
          {!editAndnewProjectCateBtn && (
            <Link
              onClick={() =>
                newBtnHandler(
                  "projectCate",
                  setNewProjectCateBtn,
                  setSaveAndCancelBtn,
                  setProjectTableVisible,
                  setEditProjectCateBtn,
                  "",
                  "",
                  "",
                  setCategoryName
                )
              }
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
                onClick={
                  editProjectCateBtn
                    ? editAndSaveCateHandler
                    : saveProjectCateBtnHandler
                }
                className={`px-2 py-1 bg-orange-500 text-white rounded-xl hover:text-black hover:bg-transparent hover:border hover:border-orange-500 transition-all`}
              >
                <Save /> <span className="lg:inline-block hidden">Save</span>
              </Link>
              <Link
                onClick={() =>
                  cancelBtnHandlre(
                    "projectCate",
                    setNewProjectCateBtn,
                    setSaveAndCancelBtn,
                    setProjectTableVisible,
                    setEditProjectCateBtn,
                    setEditAndnewProjectCateBtn,
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
        {projectTableVisible && (
          <div
            className={`${
              projectTableVisible ? "" : "hidden"
            } overflow-hidden rounded-lg border border-gray-200 shadow-md my-5`}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {["Project Category Name", "Actions"].map((name, index) => (
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
                  {projectsCategories.map((content, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {content.projectCateName}
                      </TableCell>
                      <TableCell align="right">
                        <Link
                          onClick={() => editProjectCateBtnHandler(content._id)}
                          className={`p-2   bg-orange-500 text-white rounded-xl mr-2 `}
                        >
                          <Edit className="mobile" />
                          <span className="lg:inline-block hidden">Edit</span>
                        </Link>
                        <Link
                          onClick={() => deleteProjectCategory(content._id)}
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
        {newProjectCateBtn && (
          <div className="p-2 w-full">
            <CateNew
              categoryName={categoryName}
              label="Project Category"
              onChange={onChange}
            />
          </div>
        )}
        {editProjectCateBtn && (
          <div className="p-2 w-full">
            <CateNew
              categoryName={categoryName}
              label="Project Category"
              onChange={onChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCategories;
