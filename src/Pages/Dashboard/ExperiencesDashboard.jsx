import { Add, Cancel, Delete, Edit, Save } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SkillTable.css";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import {
  createNewExperienece,
  deleteExperience,
  fetchExperiences,
  getAExperience,
  updateExperience,
} from "../../Utils/databaseConnect";
import {
  cancelBtnHandlre,
  convertDate,
  editAndSaveHandler,
  editBtnHandler,
  newBtnHandler,
  saveBtnHandler,
} from "../../Utils/util";
import NewStyledButton from "../../Components/NewStyledButton";
import StyledButton from "../../Components/StyledButton";
import ExperiencesTable from "../../Components/Dashboard/ExperiencesTable";
import ExperienceForm from "../../Components/Dashboard/ExperienceForm";
const ExperiencesDashboard = () => {
  const [newExperienceBtn, setNewExperienceBtn] = useState(false);
  const [editAndNewExperienceBtn, setEditAndNewExperienceBtn] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [experienceID, setExperienceID] = useState("");
  const [editExperienceBtn, setEditExperienceBtn] = useState(false);
  const [experienceTableVisible, setExperienceTableVisible] = useState(true);
  const [saveAndCancelBtn, setSaveAndCancelBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [companyLink, setCompanyLink] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [stillPresent, setStillPresent] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const fetchedExperiences = await fetchExperiences();
      setExperiences(fetchedExperiences);
    };
    fetch();
  }, [experiences]);

  const editAndSaveExperienceHandler = async () => {
    updateExperience(
      title,
      company,
      companyLink,
      location,
      startDate,
      endDate,
      stillPresent,
      description,
      experienceID
    );
    editAndSaveHandler(
      "experience",
      setNewExperienceBtn,
      setSaveAndCancelBtn,
      setExperienceTableVisible,
      setEditExperienceBtn,
      setEditAndNewExperienceBtn,
      "",
      "",
      "",
      "",
      setTitle,
      setCompany,
      setCompanyLink,
      setLocation,
      setStartDate,
      setEndDate,
      setStillPresent,
      setDescription
    );
  };

  const saveExperienceBtnHandler = async () => {
    createNewExperienece(
      title,
      company,
      companyLink,
      location,
      startDate,
      endDate,
      stillPresent,
      description
    );
    saveBtnHandler(
      "experience",
      setNewExperienceBtn,
      setSaveAndCancelBtn,
      setExperienceTableVisible,
      setEditExperienceBtn,
      setEditAndNewExperienceBtn,
      "",
      "",
      "",
      "",
      setTitle,
      setCompany,
      setCompanyLink,
      setLocation,
      setStartDate,
      setEndDate,
      setStillPresent,
      setDescription
    );
  };

  const openHandler = () => {
    setModal((pre) => !pre);
  };

  const editExperienceBtnHandler = async (id) => {
    const fetchedExperience = await getAExperience(id);
    editBtnHandler(
      "experience",
      setSaveAndCancelBtn,
      setExperienceTableVisible,
      setEditExperienceBtn,
      setEditAndNewExperienceBtn,
      setExperienceID,
      id
    );
    setTitle(fetchedExperience.title);
    setCompany(fetchedExperience.company);
    setCompanyLink(fetchedExperience.companyLink);
    setLocation(fetchedExperience.location);
    setStartDate(convertDate(fetchedExperience.startDate));
    setEndDate(convertDate(fetchedExperience.endDate));
    setStillPresent(fetchedExperience.stillPresent);
    setDescription(fetchedExperience.description);
  };

  const deleteExperienceBtnHandler = async (id) => {
    deleteExperience(id);
  };
  return (
    <div className=" w-full  lg:px-5  px-2">
      <div className="w-full bg-white flex flex-col  lg:px-5 px-2 py-1 rounded-3xl">
        <div className="w-full flex items-center justify-between mb-1">
          <h1 className="lg:text-2xl  text-lg font-bold mb-1">Experiences</h1>
          {!editAndNewExperienceBtn && (
            <NewStyledButton
              icon={<Add />}
              newBtn={newExperienceBtn}
              onClick={() =>
                newBtnHandler(
                  "experience",
                  setNewExperienceBtn,
                  setSaveAndCancelBtn,
                  setExperienceTableVisible,
                  setEditExperienceBtn,
                  "",
                  "",
                  "",
                  "",
                  setTitle,
                  setCompany,
                  setCompanyLink,
                  setLocation,
                  setStartDate,
                  setEndDate,
                  setStillPresent,
                  setDescription
                )
              }
              title={"New"}
            />
          )}
          {saveAndCancelBtn && (
            <div className="flex items-center gap-3">
              <StyledButton
                icon={<Save />}
                onClick={
                  editExperienceBtn
                    ? editAndSaveExperienceHandler
                    : saveExperienceBtnHandler
                }
                title={"Save"}
              />
              <StyledButton
                icon={<Cancel />}
                onClick={() =>
                  cancelBtnHandlre(
                    "experience",
                    setNewExperienceBtn,
                    setSaveAndCancelBtn,
                    setExperienceTableVisible,
                    setEditExperienceBtn,
                    setEditAndNewExperienceBtn,
                    "",
                    "",
                    "",
                    "",
                    setTitle,
                    setCompany,
                    setCompanyLink,
                    setLocation,
                    setStartDate,
                    setEndDate,
                    setStillPresent,
                    setDescription
                  )
                }
                title={"Cancel"}
              />
            </div>
          )}
        </div>
        <div className="w-full h-px rounded-3xl bg-slate-400 mb-1"></div>
        {/*Experiences table*/}
        {experienceTableVisible && (
          <ExperiencesTable
            deleteExperienceBtnHandler={deleteExperienceBtnHandler}
            editExperienceBtnHandler={editExperienceBtnHandler}
            experienceTableVisible={experienceTableVisible}
            experiences={experiences}
            openHandler={openHandler}
            setModal={setModal}
            modal={modal}
          />
        )}
        {newExperienceBtn && (
          <ExperienceForm
            company={company}
            companyLink={companyLink}
            description={description}
            endDate={endDate}
            location={location}
            setCompany={setCompany}
            setCompanyLink={setCompanyLink}
            setDescription={setDescription}
            setEndDate={setEndDate}
            setLocation={setLocation}
            setStartDate={setStartDate}
            setStillPresent={setStillPresent}
            setTitle={setTitle}
            startDate={startDate}
            stillPresent={stillPresent}
            title={title}
          />
        )}
        {editExperienceBtn && (
          <ExperienceForm
            company={company}
            companyLink={companyLink}
            description={description}
            endDate={endDate}
            location={location}
            setCompany={setCompany}
            setCompanyLink={setCompanyLink}
            setDescription={setDescription}
            setEndDate={setEndDate}
            setLocation={setLocation}
            setStartDate={setStartDate}
            setStillPresent={setStillPresent}
            setTitle={setTitle}
            startDate={startDate}
            stillPresent={stillPresent}
            title={title}
          />
        )}
      </div>
    </div>
  );
};

export default ExperiencesDashboard;
