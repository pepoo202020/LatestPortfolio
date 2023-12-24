export const SkillCategoryHandler = (
  cat_name,
  id,
  setAllSkills,
  setFrontend,
  setBackend,
  setDatabases,
  setServering,
  setOthers,
  setDefault,
  setCatID,
  setPrograms
) => {
  switch (cat_name) {
    case "Frontend":
      setAllSkills(false);
      setFrontend(true);
      setBackend(false);
      setDatabases(false);
      setServering(false);
      setOthers(false);
      setDefault(cat_name);
      setCatID(id);
      setPrograms(false);
      break;
    case "Backend":
      setAllSkills(false);
      setFrontend(false);
      setBackend(true);
      setDatabases(false);
      setServering(false);
      setOthers(false);
      setPrograms(false);
      setCatID(id);
      setDefault(cat_name);
      break;
    case "Databases":
      setAllSkills(false);
      setFrontend(false);
      setBackend(false);
      setDatabases(true);
      setServering(false);
      setOthers(false);
      setPrograms(false);
      setCatID(id);
      setDefault(cat_name);
      break;
    case "Servering":
      setAllSkills(false);
      setFrontend(false);
      setBackend(false);
      setDatabases(false);
      setServering(true);
      setOthers(false);
      setPrograms(false);
      setCatID(id);
      setDefault(cat_name);
      break;
    case "Programs":
      setAllSkills(false);
      setFrontend(false);
      setBackend(false);
      setDatabases(false);
      setServering(false);
      setOthers(false);
      setPrograms(true);
      setCatID(id);
      setDefault(cat_name);
      break;
    case "Others":
      setAllSkills(false);
      setFrontend(false);
      setBackend(false);
      setDatabases(false);
      setServering(false);
      setOthers(true);
      setPrograms(false);
      setCatID(id);
      setDefault(cat_name);
      break;
    default:
      setAllSkills(true);
      setFrontend(false);
      setBackend(false);
      setDatabases(false);
      setServering(false);
      setOthers(false);
      setPrograms(false);
      setCatID("");
      setDefault(cat_name);
      break;
  }
};

export const slide = (setCurrentImage, images, mode) => {
  if (mode === "next") {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  } else {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }
};
export const convertDate = (enteredDate) => {
  var dateString = enteredDate;
  var dateObject = new Date(dateString);
  var formattedDate = dateObject
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .split("/")
    .join("/");

  return formattedDate;
};

export const newBtnHandler = (
  mode,
  setNewBtn,
  setSaveAndCancelBtn,
  setTableVisible,
  setEditBtn,
  setSkillName,
  setSkillImage,
  setSkillCategory,
  setCategoryName,
  setTitle,
  setCompany,
  setCompanyLink,
  setLocation,
  setStartDate,
  setEndDate,
  setStillPresent,
  setDescription,
  setSubtitle,
  setImages,
  setMainImage,
  setLink,
  setSkills_used,
  setPrograms,
  setProject_Categories
) => {
  switch (mode) {
    case "skill":
      setNewBtn(true);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setEditBtn(false);
      setSkillName("");
      setSkillImage("");
      setSkillCategory("");
      break;
    case "skillCate":
      setEditBtn(false);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setNewBtn(true);
      setCategoryName("");
      break;
    case "projectCate":
      setEditBtn(false);
      setNewBtn(true);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setCategoryName("");
      break;
    case "experience":
      setNewBtn(true);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setEditBtn(false);
      setTitle("");
      setCompany("");
      setCompanyLink("");
      setLocation("");
      setStartDate("");
      setEndDate("");
      setStillPresent(true);
      setDescription("");
      break;
    case "project":
      setNewBtn(true);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setEditBtn(false);
      setTitle("");
      setSubtitle("");
      setImages("");
      setDescription("");
      setMainImage("");
      setLink("");
      setSkills_used("");
      setPrograms("");
      setProject_Categories("");
      break;
    default:
      break;
  }
};

export const saveBtnHandler = (
  mode,
  setNewBtn,
  setSaveAndCancelBtn,
  setTableVisible,
  setEditBtn,
  setEditAndnewBtn,
  setSkillName,
  setSkillImage,
  setSkillCategory,
  setCategoryName,
  setTitle,
  setCompany,
  setCompanyLink,
  setLocation,
  setStartDate,
  setEndDate,
  setStillPresent,
  setDescription,
  setSubtitle,
  setImages,
  setMainImage,
  setLink,
  setSkills_used,
  setPrograms,
  setProject_Categories
) => {
  switch (mode) {
    case "skill":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setSkillName("");
      setSkillImage("");
      setSkillCategory("");
      break;
    case "skillCate":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setCategoryName("");
      break;
    case "projectCate":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setCategoryName("");
      break;
    case "experience":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setTitle("");
      setCompany("");
      setCompanyLink("");
      setLocation("");
      setStartDate("");
      setEndDate("");
      setStillPresent(true);
      setDescription("");
      break;
    case "project":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setTitle("");
      setSubtitle("");
      setImages("");
      setDescription("");
      setMainImage("");
      setLink("");
      setSkills_used("");
      setPrograms("");
      setProject_Categories("");
      break;
    default:
      break;
  }
};

export const cancelBtnHandlre = (
  mode,
  setNewBtn,
  setSaveAndCancelBtn,
  setTableVisible,
  setEditBtn,
  setEditAndnewBtn,
  setSkillName,
  setSkillImage,
  setSkillCategory,
  setCategoryName,
  setTitle,
  setCompany,
  setCompanyLink,
  setLocation,
  setStartDate,
  setEndDate,
  setStillPresent,
  setDescription,
  setSubtitle,
  setImages,
  setMainImage,
  setLink,
  setSkills_used,
  setPrograms,
  setProject_Categories
) => {
  switch (mode) {
    case "skill":
      setNewBtn(false);
      setSaveAndCancelBtn(false);
      setTableVisible(true);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setSkillName("");
      setSkillImage("");
      setSkillCategory("");
      break;
    case "skillCate":
      setNewBtn(false);
      setSaveAndCancelBtn(false);
      setTableVisible(true);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setCategoryName("");
      break;
    case "projectCate":
      setNewBtn(false);
      setSaveAndCancelBtn(false);
      setTableVisible(true);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setCategoryName("");
      break;
    case "experience":
      setNewBtn(false);
      setSaveAndCancelBtn(false);
      setTableVisible(true);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setTitle("");
      setCompany("");
      setCompanyLink("");
      setLocation("");
      setStartDate("");
      setEndDate("");
      setStillPresent(true);
      setDescription("");
      break;
    case "project":
      setNewBtn(false);
      setSaveAndCancelBtn(false);
      setTableVisible(true);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setTitle("");
      setSubtitle("");
      setImages("");
      setDescription("");
      setMainImage("");
      setLink("");
      setSkills_used("");
      setPrograms("");
      setProject_Categories("");
      break;
    default:
      break;
  }
};

export const editAndSaveHandler = (
  mode,
  setNewBtn,
  setSaveAndCancelBtn,
  setTableVisible,
  setEditBtn,
  setEditAndnewBtn,
  setSkillName,
  setSkillImage,
  setSkillCategory,
  setCategoryName,
  setTitle,
  setCompany,
  setCompanyLink,
  setLocation,
  setStartDate,
  setEndDate,
  setStillPresent,
  setDescription,
  setSubtitle,
  setImages,
  setMainImage,
  setLink,
  setSkills_used,
  setPrograms,
  setProject_Categories
) => {
  switch (mode) {
    case "skill":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setSkillName("");
      setSkillImage("");
      setSkillCategory("");
      break;
    case "skillCate":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setCategoryName("");
      break;
    case "projectCate":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setCategoryName("");
      break;
    case "experience":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setTitle("");
      setCompany("");
      setCompanyLink("");
      setLocation("");
      setStartDate("");
      setEndDate("");
      setStillPresent(true);
      setDescription("");
      break;
    case "project":
      setNewBtn(false);
      setTableVisible(true);
      setSaveAndCancelBtn(false);
      setEditAndnewBtn(false);
      setEditBtn(false);
      setTitle("");
      setSubtitle("");
      setImages("");
      setDescription("");
      setMainImage("");
      setLink("");
      setSkills_used("");
      setPrograms("");
      setProject_Categories("");
      break;
    default:
      break;
  }
};

export const editBtnHandler = (
  mode,
  setSaveAndCancelBtn,
  setTableVisible,
  setEditBtn,
  setEditAndnewBtn,
  setID,
  id
) => {
  switch (mode) {
    case "skill":
      setID(id);
      setEditBtn(true);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setEditAndnewBtn(true);
      break;
    case "skillCate":
      setID(id);
      setEditBtn(true);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setEditAndnewBtn(true);
      break;
    case "projectCate":
      setID(id);
      setEditBtn(true);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setEditAndnewBtn(true);
      break;
    case "experience":
      setID(id);
      setEditBtn(true);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setEditAndnewBtn(true);
      break;
    case "project":
      setID(id);
      setEditBtn(true);
      setSaveAndCancelBtn(true);
      setTableVisible(false);
      setEditAndnewBtn(true);
      break;
    default:
      break;
  }
};

export const onImageSelect = (file) => {
  file.current.click();
};

export const handleImageChange = (e, setter) => {
  const selectedImage = e.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(selectedImage);
  reader.onload = () => {
    setter(reader.result);
  };
  reader.onerror = (error) => {
    console.log("Error: ", error);
  };
};
