import { TextField, Tooltip } from "@mui/material";
import React from "react";

const SkillForm = ({
  skillImage,
  onImageSelect,
  inputFile,
  skillSelect,
  handleImageChange,
  setSkillImage,
  skillName,
  setSkillName,
  skillCategory,
  setSkillCategory,
  skillsCates,
}) => {
  return (
    <div className="p-2 w-full flex flex-wrap items-center justify-center gap-10 ">
      <Tooltip title="Choose Image">
        <div className="relative flex items-center rounded-full">
          {skillImage ? (
            <img
              onClick={() => onImageSelect(inputFile)}
              src={skillImage}
              alt=""
              className="w-56 h-56  cursor-pointer"
            />
          ) : (
            <img
              onClick={() => onImageSelect(inputFile)}
              src={skillSelect}
              alt=""
              className="w-56 h-56  cursor-pointer"
            />
          )}
          <input
            className="absolute h-full w-full z-10 cursor-pointer"
            style={{ display: "none" }}
            type="file"
            id="img"
            accept="image/*"
            ref={inputFile}
            onChange={(e) => handleImageChange(e, setSkillImage)}
          />
        </div>
      </Tooltip>
      <div className="lg:w-1/2 w-full flex flex-col gap-5">
        <TextField
          id="outlined-basic"
          label="Skill Name"
          fullWidth
          variant="outlined"
          name="skillName"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />
        <div className="relative w-full ">
          <select
            value={skillCategory}
            onChange={(e) => setSkillCategory(e.target.value)}
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            {skillsCates.map((skillCate, index) => (
              <option key={index} value={skillCate.skillCategoryName}>
                {skillCate.skillCategoryName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SkillForm;
