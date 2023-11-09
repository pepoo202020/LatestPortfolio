import React from "react";

const basicInfoData = [
  {
    name: "age:",
    value: 28,
  },
  {
    name: "Residence:",
    value: "EG",
  },
  {
    name: "Freelance:",
    value: "Available",
  },
  {
    name: "Address:",
    value: "Asyut,Egypt",
  },
];

const BasicInfo = ({ currentMode, backgroundColor }) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-[10px] mb-[20px]">
      {basicInfoData.map((dataInfo, index) => (
        <div key={index} className="flex w-full items-center justify-between">
          <div
            className={`pr-[6px] pl-[5px] capitalize ${backgroundColor} ${
              backgroundColor === "bg-red-500" ? "text-white" : ""
            }`}
          >
            {dataInfo.name}
          </div>
          <div
            className={`${
              dataInfo.value === "Available"
                ? "text-lime-500"
                : currentMode
                ? ""
                : "text-white"
            }`}
          >
            {dataInfo.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BasicInfo;
