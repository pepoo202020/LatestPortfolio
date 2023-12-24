import React, { useContext, useState } from "react";
import { ModeContext } from "../contexts/modeContext";
import { ColorModeContext } from "../contexts/colorModeContext";
import emailjs from "emailjs-com";
import Lottie from "lottie-react";
import animationData from "../Assets/AnimationData.json";

const ContactPage = () => {
  const { currentMode } = useContext(ModeContext);
  const { currentColorMode } = useContext(ColorModeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m0z7266",
        "template_mwv54z6",
        formData,
        "clI5lbBoZwsnDK6wj"
      )
      .then((response) => {
        console.log("Message sent:", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div className="w-full h-full lg:px-[30px] lg:py-[30px] px-[15px] pt-[15px] pb-[60px]">
      <div
        className={`rounded-3xl w-full  h-full flex flex-wrap py-10 backdrop-blur-[30px] items-start justify-center lg:gap-5 ${
          currentMode ? "bg-[hsla(0,0%,100%,0.7)]" : "bg-[hsla(0,33%,1%,0.7)]"
        } overflow-y-auto`}
      >
        <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-3">
          <div className="mx-auto mb-5 text-center lg:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`mx-auto mb-2 h-8 w-8 ${currentColorMode.textColor}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
            <h6
              className={`font-medium ${
                currentMode ? "text-black" : "text-white"
              }`}
            >
              Egypt
            </h6>
          </div>
          <div className="mx-auto mb-5 text-center lg:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`mx-auto mb-2 h-8 w-8 ${currentColorMode.textColor}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <h6
              className={`font-medium ${
                currentMode ? "text-black" : "text-white"
              }`}
            >
              Asyut , 71511
            </h6>
          </div>
          <div className="mx-auto mb-5 text-center lg:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`mx-auto mb-2 h-8 w-8 ${currentColorMode.textColor}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <h6
              className={`font-medium ${
                currentMode ? "text-black" : "text-white"
              }`}
            >
              +201126884803
            </h6>
          </div>
        </div>
        <div className="w-full mx-10 flex items-center gap-10">
          <div className=" lg:w-1/2 w-full">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  ${
                    currentMode
                      ? ""
                      : "text-neutral-200 placeholder:text-neutral-200 peer-focus:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  }  `}
                  id="exampleInput90"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  ${
                    currentMode
                      ? ""
                      : "text-neutral-200 placeholder:text-neutral-200 peer-focus:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  }  `}
                  id="exampleInput91"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  ${
                    currentMode
                      ? ""
                      : "text-neutral-200 placeholder:text-neutral-200 peer-focus:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  }  `}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                data-te-ripple-init
                data-te-ripple-color="light"
                className={`inline-block w-full rounded ${
                  currentColorMode.value
                } px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]     ${
                  currentMode
                    ? ""
                    : "shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                } lg:mb-0`}
              >
                Send A Message
              </button>
            </form>
          </div>
          <div className="w-1/2 lg:block hidden">
            <Lottie
              animationData={animationData}
              height={500}
              loop
              autoPlay
              renderer="svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
