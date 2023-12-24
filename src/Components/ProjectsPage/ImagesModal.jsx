import React from "react";
import { slide } from "../../Utils/util";
import { ArrowBackIos, ArrowForwardIos, Cancel } from "@mui/icons-material";

const ImagesModal = ({
  setModal,
  setCurrentImage,
  projectImages,
  currentImage,
}) => {
  return (
    <div className="absolute z-[99999] top-0 left-0 bg-black/60 p-10 w-screen h-screen flex items-center justify-center">
      <div className="bg-white  w-full h-full relative overflow-hidden rounded-2xl shadow  flex flex-col items-center">
        <div
          onClick={() => setModal(false)}
          className="w-5 h-5 rounded-full cursor-pointer z-10 absolute top-2 right-2"
        >
          <Cancel />
        </div>
        <div className="h-full w-full">
          <button
            className="absolute top-1/2 -translate-y-1/2 left-5 p-2  bg-[#ccc] border-none rounded-full cursor-pointer hover:bg-[#aaa]"
            onClick={() => slide(setCurrentImage, projectImages, "next")}
          >
            <ArrowBackIos />
          </button>

          <img
            src={projectImages[currentImage]}
            alt="sliders"
            className="w-full h-full bg-cover"
          />

          <button
            className="absolute top-1/2 -translate-y-1/2 right-5 p-2 bg-[#ccc] border-none rounded-full cursor-pointer hover:bg-[#aaa]"
            onClick={() => slide(setCurrentImage, projectImages, "")}
          >
            <ArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesModal;
