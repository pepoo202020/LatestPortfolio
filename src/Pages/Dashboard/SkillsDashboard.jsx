import { Add, Cancel, Save } from "@mui/icons-material";
import React, { useState } from "react";
import "./SkillTable.css";
import { useEffect } from "react";
import skillSelect from "../../Assets/skillSelect.png";
import { useRef } from "react";
import {
  createNewSkill,
  deleteSkill,
  fetchAllSkills,
  fetchSkillsCate,
  getASkill,
  updateSkill,
} from "../../Utils/databaseConnect";
import {
  cancelBtnHandlre,
  editAndSaveHandler,
  editBtnHandler,
  newBtnHandler,
  saveBtnHandler,
  onImageSelect,
  handleImageChange,
} from "../../Utils/util";
import NewStyledButton from "../../Components/NewStyledButton";
import StyledButton from "../../Components/StyledButton";
import SkillTable from "../../Components/Dashboard/SkillTable";
import SkillForm from "../../Components/Dashboard/SkillForm";

const SkillsDashboard = () => {
  const [newSkillBtn, setNewSkillBtn] = useState(false);
  const [editAndnewSkillBtn, setEditAndnewSkillBtn] = useState(false);
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [skillImage, setSkillImage] = useState("");
  const [skillCategory, setSkillCategory] = useState("");
  const [skillsCates, setSkillsCates] = useState([]);
  const [skillID, setSkillID] = useState("");
  const [editSkillBtn, setEditSkillBtn] = useState(false);
  const [skillTableVisible, setSkillTableVisible] = useState(true);
  const [saveAndCancelBtn, setSaveAndCancelBtn] = useState(false);
  const inputFile = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const recordsPerPage = 5; // Number of records per page
  const offset = currentPage * recordsPerPage;
  const currentPageData = skills.slice(offset, offset + recordsPerPage);

  useEffect(() => {
    const fetch = async () => {
      const fetchedSkills = await fetchAllSkills();
      setSkills(fetchedSkills);
      const fetchedSkillsCates = await fetchSkillsCate();
      setSkillsCates(fetchedSkillsCates);
    };

    fetch();
  }, [skills]);

  // Handle page change
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const saveSkillBtnHandler = async () => {
    try {
      await createNewSkill(skillName, skillImage, skillCategory);
      saveBtnHandler(
        "skill",
        setNewSkillBtn,
        setSaveAndCancelBtn,
        setSkillTableVisible,
        setEditSkillBtn,
        setEditAndnewSkillBtn,
        setSkillName,
        setSkillImage,
        setSkillCategory
      );
    } catch (error) {
      console.error("error", error.response.data);
    }
  };

  const editAndSaveSkillHandler = async () => {
    console.log(skillName, skillCategory);

    try {
      updateSkill(skillName, skillImage, skillCategory, skillID);
      editAndSaveHandler(
        "skill",
        setNewSkillBtn,
        setSaveAndCancelBtn,
        setSkillTableVisible,
        setEditSkillBtn,
        setEditAndnewSkillBtn,
        setSkillName,
        setSkillImage,
        setSkillCategory
      );
    } catch (error) {
      console.error("error", error.response.data);
    }
  };

  const editSkillBtnHandler = async (id) => {
    editBtnHandler(
      "skill",
      setSaveAndCancelBtn,
      setSkillTableVisible,
      setEditSkillBtn,
      setEditAndnewSkillBtn,
      setSkillID,
      id
    );
    const fetchedSkill = await getASkill(id);

    setSkillName(fetchedSkill.skillName);
    setSkillImage(fetchedSkill.skillImage);
    setSkillCategory(fetchedSkill.skillCategory._id);
  };

  return (
    <div className=" w-full  lg:px-5  px-2">
      <div className="w-full bg-white flex flex-col  lg:px-5 px-2 py-1 rounded-3xl">
        <div className="w-full flex items-center justify-between mb-1">
          <h1 className="lg:text-2xl  text-lg font-bold mb-1">Skills</h1>
          {!editAndnewSkillBtn && (
            <NewStyledButton
              icon={<Add />}
              newBtn={newSkillBtn}
              onClick={() =>
                newBtnHandler(
                  "skill",
                  setNewSkillBtn,
                  setSaveAndCancelBtn,
                  setSkillTableVisible,
                  setEditSkillBtn,
                  setSkillName,
                  setSkillImage,
                  setSkillCategory
                )
              }
              title={"New"}
            />
          )}
          {saveAndCancelBtn && (
            <div className="flex items-center gap-3">
              <StyledButton
                onClick={
                  editSkillBtn ? editAndSaveSkillHandler : saveSkillBtnHandler
                }
                icon={<Save />}
                title={"Save"}
              />
              <StyledButton
                onClick={() =>
                  cancelBtnHandlre(
                    "skill",
                    setNewSkillBtn,
                    setSaveAndCancelBtn,
                    setSkillTableVisible,
                    setEditSkillBtn,
                    setEditAndnewSkillBtn
                  )
                }
                icon={<Cancel />}
                title={"Cancel"}
              />
            </div>
          )}
        </div>
        <div className="w-full h-px rounded-3xl bg-slate-400 mb-1"></div>
        {/*skills table*/}
        {skillTableVisible && (
          <SkillTable
            currentPageData={currentPageData}
            deleteSkill={deleteSkill}
            editSkillBtnHandler={editSkillBtnHandler}
            handlePageClick={handlePageClick}
            recordsPerPage={recordsPerPage}
            skillTableVisible={skillTableVisible}
            skills={skills}
          />
        )}
        {newSkillBtn && (
          <SkillForm
            handleImageChange={handleImageChange}
            inputFile={inputFile}
            onImageSelect={onImageSelect}
            setSkillCategory={setSkillCategory}
            setSkillImage={setSkillImage}
            setSkillName={setSkillName}
            skillCategory={skillCategory}
            skillImage={skillImage}
            skillName={skillName}
            skillSelect={skillSelect}
            skillsCates={skillsCates}
          />
        )}
        {editSkillBtn && (
          <SkillForm
            handleImageChange={handleImageChange}
            inputFile={inputFile}
            onImageSelect={onImageSelect}
            setSkillCategory={setSkillCategory}
            setSkillImage={setSkillImage}
            setSkillName={setSkillName}
            skillCategory={skillCategory}
            skillImage={skillImage}
            skillName={skillName}
            skillSelect={skillSelect}
            skillsCates={skillsCates}
          />
        )}
      </div>
    </div>
  );
};

export default SkillsDashboard;
