import { Downloading } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const DownloadCv = ({ currentMode, backgroundColor, borderColor }) => {
  return (
    <Link
      to={
        "https://drive.google.com/uc?export=download&id=1_fISAlQwNPOih2PIIIwK8a0DHdC2XtcI"
      }
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
    </Link>
  );
};

export default DownloadCv;
