import React from "react";

const langeuagesData = [
  {
    name: "Arabic",
    precentage: 100,
  },
  {
    name: "English",
    precentage: 70,
  },
];

const Languages = ({ currentMode, backgroundColor, borderColor }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[15px] w-full mb-[20px]">
      <h1
        className={`${
          currentMode ? "text-zinc-800" : "text-white"
        } text-lg font-medium capitalize leading-snug`}
      >
        Languages
      </h1>
      <div className="flex flex-col w-full items-start justify-start gap-[9px]">
        {langeuagesData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col w-full items-start justify-start gap-[5px]"
          >
            <div
              className={`flex w-full items-center justify-between ${
                currentMode ? "text-neutral-500" : "text-neutral-200"
              } text-base font-normal capitalize leading-normal`}
            >
              <h2>{data.name}</h2>
              <h2>{data.precentage}%</h2>
            </div>
            <div
              className={`w-full bg-gray-100 h-1 border ${borderColor} rounded-3xl overflow-hidden`}
            >
              <div
                className={`${backgroundColor} h-full rounded-3xl w-[${data.precentage}%]`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
