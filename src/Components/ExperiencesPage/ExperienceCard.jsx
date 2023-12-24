import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import React from "react";
import { convertDate } from "../../Utils/util";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import { Link } from "react-router-dom";

const ExperienceCard = ({ currentMode, experience, currentColorMode }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        <div className={`${currentMode ? "text-black" : "text-white"}`}>
          <div>{convertDate(experience.startDate)}</div>
          <div className="px-8"> - </div>
          <div
            className={`${
              experience.stillPresent ? currentColorMode.textColor : ""
            }`}
          >
            {experience.stillPresent
              ? "Still Present"
              : convertDate(experience.endDate)}
          </div>
        </div>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <MapsHomeWorkIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <h6 className={`lg:text-lg ${currentColorMode.textColor}`}>
          {experience.title}
        </h6>
        <h6 className="text-xs">
          <Link to={experience.companyLink}>{experience.company}</Link>
        </h6>
        <p className="lg:text-xs text-[9px]">{experience.description}</p>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceCard;
