import { FormControlLabel, Switch, TextField } from "@mui/material";
import React from "react";

const ExperienceForm = ({
  title,
  setTitle,
  company,
  setCompany,
  companyLink,
  setCompanyLink,
  location,
  setLocation,
  startDate,
  setStartDate,
  stillPresent,
  endDate,
  setEndDate,
  setStillPresent,
  description,
  setDescription,
}) => {
  return (
    <div className="p-2 w-full flex flex-wrap items-center justify-center gap-3 ">
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
        label="Company Name"
        fullWidth
        variant="outlined"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Company Link"
        fullWidth
        variant="outlined"
        name="companyLink"
        value={companyLink}
        onChange={(e) => setCompanyLink(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Company Location"
        fullWidth
        variant="outlined"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="w-full flex items-center justify-start gap-5">
        <TextField
          id="outlined-basic"
          label="Start Date"
          fullWidth
          variant="outlined"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        {!stillPresent && (
          <TextField
            id="outlined-basic"
            label="End Date"
            fullWidth
            variant="outlined"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        )}
        <FormControlLabel
          control={
            <Switch
              color="warning"
              checked={stillPresent}
              onChange={(e) => setStillPresent(e.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Still Present"
        />
      </div>
      <TextField
        id="outlined-basic"
        label="Description"
        fullWidth
        variant="outlined"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default ExperienceForm;
