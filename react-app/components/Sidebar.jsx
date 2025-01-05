import { useContext, useEffect, useState } from "react";
import Context from "../src/context/Context";

const Sidebar = () => {
  const { state, dispatch, setResultData, inputRef } = useContext(Context);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const clearData = () => {
    dispatch({ type: "setShowResult", payload: false });
    setResultData("");
    inputRef.current.focus();
  };

  return (
    <aside
      className={`${isOpen ? "" : ""} relative hidden w-[30%] duration-500 md:block`}
    >
      <div className="mx-6 mt-3 flex h-[95%] flex-col justify-between rounded-md bg-zinc-800 px-5 py-5">
        <button
          className="my-2 flex justify-self-center px-2 py-1 font-semibold hover:text-primary"
          onClick={clearData}
        >
          <span className="inline-flex items-center gap-1 duration-300 hover:scale-[1.05]">
            <svg
              // fill="#FC7A69"
              width="15px"
              height="15px"
              className="text-white"
              viewBox="0 -0.5 21 21"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="#"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-99.000000, -400.000000)"
                    fill="#FC7A69"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <title>New Chat</title>
                      <path
                        d="M61.9,258.010643 L45.1,258.010643 L45.1,242.095788 L53.5,242.095788 L53.5,240.106431 L43,240.106431 L43,260 L64,260 L64,250.053215 L61.9,250.053215 L61.9,258.010643 Z M49.3,249.949769 L59.63095,240 L64,244.114985 L53.3341,254.031929 L49.3,254.031929 L49.3,249.949769 Z"
                        id="edit-[#1479]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            New Chat
          </span>
        </button>
        {state.prevPrompt.length > 0 &&
          state.prevPrompt.map((item, index) => (
            <li key={index} className="mx-2 my-4 list-none border-gray-400">
              {item}
            </li>
          ))}
        <p className={`${isOpen ? "" : ""}text-justify text-xs`}>
          orion is based on GeminiAI. AI chats may display inaccurate or
          offensive information.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
