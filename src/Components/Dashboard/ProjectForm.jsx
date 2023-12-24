import { TextField, Tooltip } from "@mui/material";
import Multiselect from "multiselect-react-dropdown";
import React from "react";

const ProjectForm = ({
  mainImage,
  onMainImageSelect,
  ProjectImage,
  mainImageRef,
  handleMainImageChange,
  title,
  setTitle,
  subtitle,
  setSubtitle,
  image,
  onImagesSelect,
  Projects,
  imagesRef,
  handleImagesChange,
  images,
  description,
  setDescription,
  link,
  setLink,
  setSkills_used,
  skills,
  setPrograms,
  skillsPrograms,
  setProject_Categories,
  projectCates,
}) => {
  return (
    <div className="p-2 w-full   flex flex-col items-center  gap-10 ">
      <div className="flex lg:flex-row flex-col lg:items-start items-center gap-5 w-full">
        <Tooltip title="Choose Main Image">
          <div className="relative flex items-center w-fit justify-center rounded-full">
            {mainImage ? (
              <img
                onClick={onMainImageSelect}
                src={mainImage}
                alt=""
                className="w-32 h-32  cursor-pointer"
              />
            ) : (
              <img
                onClick={onMainImageSelect}
                src={ProjectImage}
                alt=""
                className="w-32 h-32  cursor-pointer"
              />
            )}
            <input
              className="absolute h-full w-full z-10 cursor-pointer"
              style={{ display: "none" }}
              type="file"
              id="img"
              accept="image/*"
              ref={mainImageRef}
              onChange={handleMainImageChange}
            />
          </div>
        </Tooltip>
        <div className="flex flex-col w-full items-center gap-5">
          <TextField
            id="outlined-basic"
            label="Title"
            fullWidth
            variant="outlined"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Subtitle"
            fullWidth
            variant="outlined"
            name="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-start items-center gap-5 w-full">
        <div className="flex flex-col gap-2 w-32">
          <div>
            <Tooltip title="Choose Other Images">
              <div className="relative flex items-center w-32 rounded-full">
                {image ? (
                  <img
                    onClick={onImagesSelect}
                    src={image}
                    alt=""
                    className="w-32 h-32  cursor-pointer"
                  />
                ) : (
                  <img
                    onClick={onImagesSelect}
                    src={Projects}
                    alt=""
                    className="w-32 h-32  cursor-pointer"
                  />
                )}
                <input
                  className="absolute h-full w-full z-10 cursor-pointer"
                  style={{ display: "none" }}
                  type="file"
                  id="img"
                  accept="image/*"
                  ref={imagesRef}
                  onChange={handleImagesChange}
                />
              </div>
            </Tooltip>
          </div>
          <div className="w-32 border-2 p-2  flex flex-wrap gap-1 border-black">
            {images.length === 0
              ? ""
              : images.map((image, index) => (
                  <img
                    src={image}
                    alt=""
                    key={index}
                    className="w-5 h-5 bg-cover"
                  />
                ))}
          </div>
        </div>
        <div className="flex flex-col w-full items-center gap-5">
          <TextField
            id="outlined-basic"
            label="Description"
            fullWidth
            variant="outlined"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Link"
            fullWidth
            variant="outlined"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <div className="w-full flex lg:flex-row flex-col gap-2 mb-1 items-center">
            <h1 className="text-xs font-bold">Skills:</h1>
            <Multiselect
              isObject={false}
              onRemove={(e) => {
                setSkills_used(e);
              }}
              onSelect={(e) => {
                setSkills_used(e);
              }}
              options={skills}
            />
            <h1 className="text-xs font-bold">Programs:</h1>
            <Multiselect
              isObject={false}
              onRemove={(e) => {
                setPrograms(e);
              }}
              onSelect={(e) => {
                setPrograms(e);
              }}
              options={skillsPrograms}
            />
            <h1 className="text-xs font-bold">Categories:</h1>
            <Multiselect
              isObject={false}
              onRemove={(e) => {
                setProject_Categories(e);
              }}
              onSelect={(e) => {
                setProject_Categories(e);
              }}
              options={projectCates}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
