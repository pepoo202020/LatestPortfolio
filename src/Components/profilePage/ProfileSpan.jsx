import React from "react";

const ProfileSpan = ({ textColor, content }) => {
  return (
    <span className={`${textColor} font-semibold capitalize`}>{content}</span>
  );
};

export default ProfileSpan;
