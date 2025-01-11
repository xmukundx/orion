import { useContext, useState } from "react";
import Context from "../src/context/Context";
import { FaEdit } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Sidebar = () => {
  const { state, dispatch, setResultData, inputRef } = useContext(Context);
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const clearData = () => {
    dispatch({ type: "setShowResult", payload: false });
    setResultData("");
    inputRef.current.focus();
  };

  return (
    <div className="h-screen">
      <h1
        onClick={() => window.location.reload()}
        className="fixed z-10 ml-8 mt-10 pb-5 text-6xl font-bold text-primary hover:cursor-pointer"
      >
        orion
      </h1>
      <button
        className={` ${isOpen ? "rotate-180" : ""} fixed left-0 top-0 z-10 ml-2 mt-2 cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiMenuFries className="" />
      </button>
      <aside
        className={`${!isOpen && "translate-x-[-50vw]"} h-[97vh] max-w-[17rem] duration-500 md:block`}
      >
        <div className="mx-6 mt-5 flex h-[95vh] flex-col justify-between rounded-md bg-zinc-800 px-5 py-5 pt-28">
          <button
            className="my-2 flex justify-self-center px-2 py-1 font-semibold hover:text-primary"
            onClick={clearData}
          >
            <span className="inline-flex items-center gap-1 duration-300 hover:scale-[1.05]">
              <FaEdit />
              New Chat
            </span>
          </button>
          <div>
            {state.prevPrompt.length > 0 &&
              state.prevPrompt.map((item, index) => (
                <li key={index} className=" border-gray-400">
                  {item.length > 15 ? item.slice(0, 13) + "..." : item}
                </li>
              ))}
          </div>
          <p className={`${isOpen ? "" : ""}text-justify text-xs`}>
            orion is based on GeminiAI. AI chats may display inaccurate or
            offensive information.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
