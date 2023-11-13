import { Downloading } from "@mui/icons-material";
import React from "react";

const DownloadCv = ({ currentMode, backgroundColor, borderColor }) => {
  return (
    <div
      className={`${backgroundColor} ${
        currentMode
          ? backgroundColor === "bg-red-500"
            ? "text-white hover:text-zinc-800"
            : "text-zinc-800"
          : "text-white"
      } px-[32px] py-[10px] flex items-center justify-center gap-[19px] cursor-pointer hover:border ${borderColor} transition-all hover:bg-transparent`}
    >
      <div className="text-sm font-semibold uppercase">Download Cv</div>
      <Downloading />
    </div>
  );
};

export default DownloadCv;
