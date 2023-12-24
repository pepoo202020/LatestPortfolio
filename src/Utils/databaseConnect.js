import axios from "axios";

const HOST_LINK = "https://portifoliobackend.onrender.com";
export const fetchSkillsCate = async () => {
  const response = await axios.get(`${HOST_LINK}/api/cates/skills/all`);

  return response.data.skillCategories;
};

export const fetchAllSkills = async () => {
  const response = await axios.get(`${HOST_LINK}/api/skills/all`);
  return response.data.skills;
};

export const fetchSkillsWithoutPrograms = async () => {
  const response = await axios.get(`${HOST_LINK}/api/skills/withoutP`);
  return response.data.skills;
};

export const fetchCateSkill = async (catID) => {
  const response = await axios.get(`${HOST_LINK}/api/skills/filter/${catID}`);
  return response.data.skills;
};

export const getSpecificProject = async (id, setProjectImages) => {
  try {
    const response = await axios.get(`${HOST_LINK}/api/projects/project/${id}`);
    setProjectImages(response.data.projectDetails.images);
  } catch (error) {
    alert(error.message);
  }
};

export const fetchProjectCate = async () => {
  const response = await axios.get(`${HOST_LINK}/api/cates/projects/all`);
  return response.data.projectCates;
};

export const fetchPrograms = async () => {
  const response = await axios.get(
    `${HOST_LINK}/api/skills/filter/657ac80a21e6d51448cc2796`
  );
  const programs = response.data.skills.map((skill) => skill.skillName);
  return programs;
};

export const fetchProjects = async () => {
  const response = await axios.get(`${HOST_LINK}/api/projects/all`);
  return response.data.projectsWithCategories;
};

export const fetchFilteredProjects = async (
  projectCate,
  skillUsed,
  program
) => {
  const link = `${HOST_LINK}/api/projects`;
  var response;
  if (projectCate === "" && skillUsed === "") {
    response = await axios.get(`${link}/programs/${program}`);
  } else if (program === "" && skillUsed === "") {
    response = await axios.get(`${link}/category/${projectCate}`);
  } else if (projectCate === "" && program === "") {
    response = await axios.get(`${link}/skills/${skillUsed}`);
  } else if (projectCate === "") {
    response = await axios.get(`${link}/filter/${skillUsed}/${program}`);
  } else if (skillUsed === "") {
    response = await axios.get(`${link}/filter/${projectCate}/${program}`);
  } else if (program === "") {
    response = await axios.get(`${link}/filter/${projectCate}/${skillUsed}/`);
  } else if (projectCate) {
    response = await axios.get(
      `${link}/filter/${projectCate}/${skillUsed}/${program}`
    );
  }
  return response.data.projectsWithCategories;
};

export const loginUser = async (data, navigate) => {
  try {
    const response = await axios.post(`${HOST_LINK}/api/admin/login`, data);
    alert(response.data.message);
    navigate("/dashboard/main");
  } catch (error) {
    alert(error.response.data);
  }
};

export const fetchExperiences = async () => {
  const response = await axios.get(`${HOST_LINK}/api/experiences/all`);
  return response.data.experiences;
};

export const createNewSkill = async (skillName, skillImage, skillCategory) => {
  const response = await axios.post(`${HOST_LINK}/api/skills/new`, {
    skillName: skillName,
    skillImage: skillImage,
    skillCategory: skillCategory,
  });
  alert(response.data.message);
};

export const updateSkill = async (
  skillName,
  skillImage,
  skillCategory,
  skillID
) => {
  const response = await axios.put(`${HOST_LINK}/api/skills/${skillID}`, {
    skillName: skillName,
    skillImage: skillImage,
    skillCategory: skillCategory,
  });
  alert(response.data.message);
};

export const getASkill = async (id) => {
  const response = await axios.get(`${HOST_LINK}/api/skills/specific/${id}`);
  return response.data.skill;
};

export const deleteSkill = async (id) => {
  try {
    const response = await axios.delete(`${HOST_LINK}/api/skills/${id}`);
    alert(response.data.message);
  } catch (error) {
    alert("error", error.response.data);
  }
};

export const createNewSkillCategory = async (categoryName) => {
  const response = await axios.post(`${HOST_LINK}/api/cates/skills/new`, {
    categoryName: categoryName,
  });
  alert(response.data.message);
};

export const updateSkillCategory = async (categoryName, cateID) => {
  const response = await axios.put(`${HOST_LINK}/api/cates/skills/${cateID}`, {
    categoryName: categoryName,
  });
  alert(response.data.message);
};

export const getASkillCategory = async (id) => {
  const response = await axios.get(
    `${HOST_LINK}/api/cates/skills/specific/${id}`
  );
  return response.data.cate.skillCategoryName;
};

export const deleteSkillCategory = async (id) => {
  try {
    const response = await axios.delete(`${HOST_LINK}/api/cates/skills/${id}`);
    alert(response.data.message);
  } catch (error) {
    alert("error", error.response.data);
  }
};

export const fetchProjectCategories = async () => {
  const response = await axios.get(`${HOST_LINK}/api/cates/projects/all`);
  return response.data.projectCates;
};

export const createNewProjectCategory = async (categoryName) => {
  const response = await axios.post(`${HOST_LINK}/api/cates/projects/new`, {
    categoryName: categoryName,
  });
  alert(response.data.message);
};

export const updateProjectCategory = async (categoryName, cateID) => {
  const response = await axios.put(
    `${HOST_LINK}/api/cates/projects/${cateID}`,
    {
      categoryName: categoryName,
    }
  );
  alert(response.data.message);
};

export const getAProjectCategory = async (id) => {
  const response = await axios.get(
    `${HOST_LINK}/api/cates/projects/specific/${id}`
  );
  return response.data.projectCate.projectCateName;
};

export const deleteProjectCategory = async (id) => {
  try {
    const response = await axios.delete(
      `${HOST_LINK}/api/cates/projects/${id}`
    );
    alert(response.data.message);
  } catch (error) {
    alert("error", error.response.data);
  }
};

export const updateExperience = async (
  title,
  company,
  companyLink,
  location,
  startDate,
  endDate,
  stillPresent,
  description,
  experienceID
) => {
  const response = await axios.put(
    `${HOST_LINK}/api/experiences/${experienceID}`,
    {
      title,
      company,
      companyLink,
      location,
      startDate: startDate,
      endDate: endDate,
      stillPresent: stillPresent,
      description,
    }
  );
  alert(response.data.message);
};

export const createNewExperienece = async (
  title,
  company,
  companyLink,
  location,
  startDate,
  endDate,
  stillPresent,
  description
) => {
  const response = await axios.post(`${HOST_LINK}/api/experiences/new`, {
    title,
    company,
    companyLink,
    location,
    startDate: startDate,
    endDate: endDate,
    stillPresent: stillPresent,
    description,
  });
  alert(response.data.message);
};

export const getAExperience = async (id) => {
  const response = await axios.get(`${HOST_LINK}/api/experiences/${id}`);
  return response.data.experienceData;
};

export const deleteExperience = async (id) => {
  try {
    const response = await axios.delete(`${HOST_LINK}/api/experiences/${id}`);
    alert(response.data.message);
  } catch (error) {
    alert("error", error.response.data);
  }
};

export const getAProject = async (id) => {
  const response = await axios.get(`${HOST_LINK}/api/projects/project/${id}`);
  return response.data.projectDetails;
};

export const updateProject = async (
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
) => {
  const response = await axios.put(`${HOST_LINK}/api/projects/${projectId}`, {
    title,
    subtitle,
    description,
    images,
    mainImage,
    link,
    skills_used,
    programs,
    project_Categories,
  });
  alert(response.data.message);
};

export const createNewProject = async (
  title,
  subtitle,
  description,
  images,
  mainImage,
  link,
  skills_used,
  programs,
  project_Categories
) => {
  const response = await axios.post(`${HOST_LINK}/api/projects/new`, {
    title,
    subtitle,
    description,
    images,
    mainImage,
    link,
    skills_used,
    programs,
    project_Categories,
  });
  alert(response.data.message);
};

export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${HOST_LINK}/api/projects/${id}`);
    alert(response.data.message);
  } catch (error) {
    alert("error", error.response.data);
  }
};
