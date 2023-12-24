import { Add, Cancel, Delete, Edit, Save } from "@mui/icons-material";
import { TextField, Tooltip } from "@mui/material";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./SkillTable.css";
import ProjectImage from "../../Assets/ProjectManagement.jpg";
import Projects from "../../Assets/projects.jpg";
import {
  createNewProject,
  deleteProject,
  fetchPrograms,
  fetchProjectCate,
  fetchProjects,
  fetchSkillsWithoutPrograms,
  getAProject,
  updateProject,
} from "../../Utils/databaseConnect";
import {
  cancelBtnHandlre,
  editAndSaveHandler,
  editBtnHandler,
  newBtnHandler,
  saveBtnHandler,
} from "../../Utils/util";
import NewStyledButton from "../../Components/NewStyledButton";
import StyledButton from "../../Components/StyledButton";
import ProjectTable from "../../Components/Dashboard/ProjectTable";
import ProjectForm from "../../Components/Dashboard/ProjectForm";

const ProjectsDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [editAndNewProjectBtn, setEditAndNewProjectBtn] = useState(false);
  const [newProjectBtn, setNewProjectBtn] = useState(false);
  const [saveAndCancelBtn, setSaveAndCancelBtn] = useState(false);
  const [projectTableVisible, setProjectTableVisible] = useState(true);
  const [editProjectBtn, setEditProjectBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [link, setLink] = useState("");
  const [skills_used, setSkills_used] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [project_Categories, setProject_Categories] = useState([]);
  const [projectId, setProjectId] = useState("");
  const [skills, setSkills] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [skillsPrograms, setSkillsPrograms] = useState([]);
  const [projectCates, setProjectCates] = useState([]);
  const [image, setImage] = useState("");
  const mainImageRef = useRef(null);
  const imagesRef = useRef(null);

  const recordsPerPage = 5; // Number of records per page
  const offset = currentPage * recordsPerPage;
  const currentPageData = projects.slice(offset, offset + recordsPerPage);

  const onMainImageSelect = () => {
    mainImageRef.current.click();
  };
  const onImagesSelect = () => {
    imagesRef.current.click();
  };

  useEffect(() => {
    const fetch = async () => {
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects);
      const fetchedProjectCate = await fetchProjectCate();
      const cates = fetchedProjectCate.map((cat) => cat.projectCateName);
      setProjectCates(cates);
      const fetchedPrograms = await fetchPrograms();
      setSkillsPrograms(fetchedPrograms);
      const fetchedSkillsWithoutP = await fetchSkillsWithoutPrograms();
      const skillNames = fetchedSkillsWithoutP.map((skill) => skill.skillName);
      setSkills(skillNames);
    };

    fetch();
  }, [projects]);

  // Handle page change
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const editAndSaveProjectHandler = async () => {
    updateProject(
      title,
      subtitle,
      description,
      images,
      mainImage,
      link,
      skills_used,
      programs,
      project_Categories,
      projectId
    );
    editAndSaveHandler(
      "project",
      setNewProjectBtn,
      setSaveAndCancelBtn,
      setProjectTableVisible,
      setEditProjectBtn,
      setEditAndNewProjectBtn,
      "",
      "",
      "",
      "",
      setTitle,
      "",
      "",
      "",
      "",
      "",
      "",
      setDescription,
      setSubtitle,
      setImages,
      setMainImage,
      setLink,
      setSkills_used,
      setPrograms,
      setProject_Categories
    );
  };
  const handleMainImageChange = (e) => {
    const selectedImage = e.target.files[0];
    //setSkillImage(URL.createObjectURL(selectedImage));
    var reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = () => {
      setMainImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const saveProjectBtnHandler = async () => {
    createNewProject(
      title,
      subtitle,
      description,
      images,
      mainImage,
      link,
      skills_used,
      programs,
      project_Categories
    );
    saveBtnHandler(
      "project",
      setNewProjectBtn,
      setSaveAndCancelBtn,
      setProjectTableVisible,
      setEditProjectBtn,
      setEditAndNewProjectBtn,
      "",
      "",
      "",
      "",
      setTitle,
      "",
      "",
      "",
      "",
      "",
      "",
      setDescription,
      setSubtitle,
      setImages,
      setMainImage,
      setLink,
      setSkills_used,
      setPrograms,
      setProject_Categories
    );
  };

  const editProjectBtnHandler = async (id) => {
    const fetchedProject = await getAProject(id);
    const skillNames = fetchedProject.skills_used.map(
      (skill) => skill.skillName
    );
    const projectCates = fetchedProject.project_Categories.map(
      (cate) => cate.projectCateName
    );
    setTitle(fetchedProject.title);
    setSubtitle(fetchedProject.subtitle);
    setImages(fetchedProject.images);
    setDescription(fetchedProject.description);
    setMainImage(fetchedProject.mainImage);
    setLink(fetchedProject.link);
    setPrograms(fetchedProject.programs);
    setSkills_used(skillNames);
    setProject_Categories(projectCates);
    editBtnHandler(
      "project",
      setSaveAndCancelBtn,
      setProjectTableVisible,
      setEditProjectBtn,
      setEditAndNewProjectBtn,
      setProjectId,
      id
    );
  };
  const deleteProjectBtnHandler = async (id) => {
    deleteProject(id);
  };
  const handleImagesChange = (e) => {
    const selectedImage = e.target.files[0];
    //setSkillImage(URL.createObjectURL(selectedImage));
    var reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
    const selectedFiles = e.target.files;
    const newImagesArr = [...images]; // Copy the existing images array

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const imageUrl = URL.createObjectURL(file);
      newImagesArr.push(imageUrl); // Add the new image URL to the copied array
    }

    setImages(newImagesArr);
  };

  return (
    <div className=" w-full h-full overflow-y-auto  lg:px-5  px-2">
      <div className="w-full  h-fit lg:mb-0 mb-16 bg-white relative flex flex-col  lg:px-5 px-2 py-1 rounded-3xl">
        <div className="w-full sticky bg-white z-50 rounded-t-3xl  top-0">
          <div className="w-full   flex items-center justify-between mb-1">
            <h1 className="lg:text-2xl  text-lg font-bold mb-1">Projects</h1>
            {!editAndNewProjectBtn && (
              <NewStyledButton
                newBtn={newProjectBtn}
                onClick={() =>
                  newBtnHandler(
                    "project",
                    setNewProjectBtn,
                    setSaveAndCancelBtn,
                    setProjectTableVisible,
                    setEditProjectBtn,
                    "",
                    "",
                    "",
                    "",
                    setTitle,
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    setDescription,
                    setSubtitle,
                    setImage,
                    setMainImage,
                    setLink,
                    setSkills_used,
                    setPrograms,
                    setProject_Categories
                  )
                }
                icon={<Add />}
                title={"New"}
              />
            )}
            {saveAndCancelBtn && (
              <div className="flex items-center gap-3">
                <StyledButton
                  onClick={
                    editProjectBtn
                      ? editAndSaveProjectHandler
                      : saveProjectBtnHandler
                  }
                  icon={<Save />}
                  title={"Save"}
                />
                <StyledButton
                  onClick={() =>
                    cancelBtnHandlre(
                      "project",
                      setNewProjectBtn,
                      setSaveAndCancelBtn,
                      setProjectTableVisible,
                      setEditProjectBtn,
                      setEditAndNewProjectBtn,
                      "",
                      "",
                      "",
                      "",
                      setTitle,
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      setDescription,
                      setSubtitle,
                      setImages,
                      setMainImage,
                      setLink,
                      setSkills_used,
                      setPrograms,
                      setProject_Categories
                    )
                  }
                  icon={<Cancel />}
                  title={"Cancel"}
                />
              </div>
            )}
          </div>
          <div className="w-full h-px rounded-3xl bg-slate-400 mb-1"></div>
        </div>
        {/*Experiences table*/}
        {projectTableVisible && (
          <ProjectTable
            currentPageData={currentPageData}
            deleteProjectBtnHandler={deleteProjectBtnHandler}
            editProjectBtnHandler={editProjectBtnHandler}
            handlePageClick={handlePageClick}
            projectTableVisible={projectTableVisible}
            projects={projects}
            recordsPerPage={recordsPerPage}
          />
        )}
        {newProjectBtn && (
          <ProjectForm
            ProjectImage={ProjectImage}
            Projects={Projects}
            description={description}
            handleImagesChange={handleImagesChange}
            handleMainImageChange={handleMainImageChange}
            image={image}
            images={images}
            imagesRef={imagesRef}
            link={link}
            mainImage={mainImage}
            mainImageRef={mainImageRef}
            onImagesSelect={onImagesSelect}
            onMainImageSelect={onMainImageSelect}
            projectCates={projectCates}
            setDescription={setDescription}
            setLink={setLink}
            setPrograms={setPrograms}
            setProject_Categories={setProject_Categories}
            setSkills_used={setSkills_used}
            setSubtitle={setSubtitle}
            setTitle={setTitle}
            skills={skills}
            skillsPrograms={skillsPrograms}
            subtitle={subtitle}
            title={title}
          />
        )}
        {editProjectBtn && (
          <ProjectForm
            ProjectImage={ProjectImage}
            Projects={Projects}
            description={description}
            handleImagesChange={handleImagesChange}
            handleMainImageChange={handleMainImageChange}
            image={image}
            images={images}
            imagesRef={imagesRef}
            link={link}
            mainImage={mainImage}
            mainImageRef={mainImageRef}
            onImagesSelect={onImagesSelect}
            onMainImageSelect={onMainImageSelect}
            projectCates={projectCates}
            setDescription={setDescription}
            setLink={setLink}
            setPrograms={setPrograms}
            setProject_Categories={setProject_Categories}
            setSkills_used={setSkills_used}
            setSubtitle={setSubtitle}
            setTitle={setTitle}
            skills={skills}
            skillsPrograms={skillsPrograms}
            subtitle={subtitle}
            title={title}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsDashboard;
