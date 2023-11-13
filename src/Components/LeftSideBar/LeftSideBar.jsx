import React, { Fragment, useContext, useState } from "react";
import imageLogo from "../../Assets/image_logo.png";
import facebookIcon from "../../Assets/icons/facebook.png";
import linkedinIcon from "../../Assets/icons/linkedin.png";
import githubIcon from "../../Assets/icons/github.png";
import SocialIcons from "../SocialIcons/SocialIcons";
import instgramIcon from "../../Assets/icons/instagram.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BasicInfo from "./BasicInfo";
import Languages from "./Languages";
import DownloadCv from "./DownloadCv";
import { ModeContext } from "../../contexts/modeContext";
import CustomDivider from "./CustomDivider";
import { ColorModeContext } from "../../contexts/colorModeContext";
import { Menu } from "@mui/icons-material";
import DrawerLeft from "./DrawerLeft";

const socials = [
  {
    name: "facebook",
    link: "https://www.facebook.com/abanob.shosh/",
    icon: <img src={facebookIcon} alt="facebook" />,
  },
  {
    name: "instgram",
    link: "https://www.instagram.com/pamposhosh/",
    icon: <img src={instgramIcon} alt="instgram" />,
  },
  {
    name: "telegram",
    link: "https://t.me/popo01126",
    icon: <TelegramIcon style={{ fontSize: "18px", marginLeft: "-2px" }} />,
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/poposhosh23",
    icon: <img className="w-3.5" src={linkedinIcon} alt="linkedin" />,
  },
  {
    name: "whatsapp",
    link: "https://wa.me/+201126884803",
    icon: <LocalPhoneIcon style={{ fontSize: "18px" }} />,
  },
  {
    name: "github",
    link: "https://github.com/pepoo202020",
    icon: <img className="w-4" src={githubIcon} alt="github" />,
  },
];

const LeftSideBar = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);
  const [drawer, setDrawer] = useState(false);

  const drawerHandler = () => {
    setDrawer(true);
  };

  return (
    <Fragment>
      <button
        className={`lg:hidden block absolute top-5 right-5 z-50 ${
          currentMode ? "bg-neutral-300" : "bg-gray-700"
        } w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer hover:bg-transparent`}
        onClick={drawerHandler}
      >
        <Menu className={`${currentColorMode.textColor} text-lg`} />
      </button>
      <DrawerLeft
        currentColorMode={currentColorMode}
        currentMode={currentMode}
        drawer={drawer}
        setDrawer={setDrawer}
      />

      <div
        className={`
      
      hidden
      ${currentMode ? "bg-white" : "bg-black"} 
      h-full
      lg:flex
      flex-col
      items-center
      pr-[45px]
      pl-[40px]
      pt-[20px]
      rounded-tr-3xl
      rounded-br-3xl

    `}
      >
        {/*Inage Logo*/}
        <div
          className={`
      w-36
      h-36
      rounded-full
      bg-[#E4E6EB]
      relative
      mb-[20px]
      border-2
      ${currentColorMode ? currentColorMode.borderColor : "border-yellow-500"}
    `}
        >
          <div className="w-full h-full overflow-hidden rounded-full">
            <img src={imageLogo} alt="my_image logo" className="-mt-5" />
          </div>
          <div className="w-4 h-4 absolute bottom-[10px] left-[115px] bg-lime-500 z-50 rounded-full shadow"></div>
        </div>
        <h1
          className={`${
            currentMode ? "text-zinc-800" : "text-white"
          } text-lg font-medium capitalize   leading-snug mb-[10px]`}
        >
          Abanob Shenoda
        </h1>
        <h5
          className={`${currentMode ? "text-neutral-500" : "text-neutral-200"}
      text-base
      font-normal
      capitalize
      leading-normal
      mb-[10px] `}
        >
          Full Stack Developer
        </h5>
        <div
          className="
        flex
        items-center
        gap-[15px]
        mb-[20px]
      "
        >
          {socials.map((social, index) => (
            <SocialIcons
              key={index}
              title={social.name}
              link={social.link}
              icon={social.icon}
              backgroundColor={currentColorMode.value}
            />
          ))}
        </div>
        <CustomDivider currentMode={currentMode} />
        <BasicInfo
          currentMode={currentMode}
          backgroundColor={currentColorMode.value}
        />
        <CustomDivider currentMode={currentMode} />
        <Languages
          currentMode={currentMode}
          backgroundColor={currentColorMode.value}
          borderColor={currentColorMode.borderColor}
        />
        <CustomDivider currentMode={currentMode} />
        <DownloadCv
          currentMode={currentMode}
          backgroundColor={currentColorMode.value}
          borderColor={currentColorMode.borderColor}
        />
      </div>
    </Fragment>
  );
};

export default LeftSideBar;
