import { useContext, useEffect } from "react";
import Context from "../src/context/Context";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const { state, dispatch, clearData } = useContext(Context);

  useEffect(() => {
    if (window.innerWidth < 768) {
      dispatch({ type: "setIsOpen", payload: false }); // hides the aside on mobile
    }
  }, []);

 
  return (
    <div className="fixed">
            <aside
        className={`${!state.isOpen && "translate-x-[-60vw]"} h-[97vh] w-[15rem] duration-200`}
      >
        <div className="mx-6 mt-5 flex h-[95vh] flex-col rounded-md border border-gray-800 bg-gray-400 bg-opacity-0 bg-clip-padding px-5 py-5 backdrop-blur-md backdrop-filter">
          <button
            className="ml-auto rounded-md border border-gray-800 p-1"
            title="Close"
            onClick={() => dispatch({ type: "setIsOpen", payload: false })}
          >
            <IoMdClose />
          </button>
          <h1
            
            className="text-6xl font-bold text-primary cursor-default "
          >
            orion
          </h1>
          <button
            className="my-2 flex justify-self-center  py-1 font-semibold hover:text-primary"
            onClick={clearData}
          >
            <span className="inline-flex font-semibold items-center gap-1 mt-14 p-1 border border-gray-800 rounded-md duration-300 hover:scale-[1.05]"
            
            >
              <FaEdit />
              New Chat
            </span>
          </button>
          <div>
            <h1 className="font-bold border-b border-gray-800 mt-10">Recent <span className="text-primary">chats</span></h1>
            {state.prevPrompt.length > 0 ? (
              state.prevPrompt.map((item, index) => (
                <li key={index} className="border-gray-400 font-light list-none text-sm">
                  {item.length > 15 ? item.slice(0, 13) + "..." : item}
                </li>
              ))
            ) : (
              <p className="font-extralight">No recent chats</p>
            )
              }
          </div>
          <p className="mt-auto text-justify text-xs">
            orion is based on GeminiAI. AI chats may display inaccurate or
            offensive information.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
