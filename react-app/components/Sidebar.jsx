import { useContext, useEffect } from "react";
import Context from "../src/context/Context";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const { state, dispatch, clearData } = useContext(Context);

  useEffect(() => {
    if (window.innerWidth < 400) {
      dispatch({ type: "setIsAsideOpen"}); // hides the aside on mobile devices by default
    }
  }, []);

  return (
    <div className="fixed lg:static">
      <aside
        className={`${!state.isAsideOpen && "translate-x-[-100vw]"} h-[97vh] w-[15rem] duration-300`}
      >
        <div className="mx-6 mt-5 flex h-[95vh] flex-col rounded-md border border-gray-800 bg-gray-400 bg-opacity-0 bg-clip-padding px-5 py-5 backdrop-blur-md backdrop-filter">
          <button
            className="ml-auto rounded-md border border-gray-800 p-1"
            title="Close"
            onClick={() => dispatch({ type: "setIsAsideOpen"})}
          >
            <IoMdClose />
          </button>
          <h1 className="cursor-default text-6xl font-bold text-primary">
            orion
          </h1>
          <button
            className="my-2 flex justify-self-center py-1 font-semibold hover:text-primary"
            onClick={clearData}
          >
            <span className="mt-14 inline-flex items-center gap-1 rounded-md border border-gray-800 p-1 font-semibold duration-300 hover:scale-[1.05]">
              <FaEdit />
              New Chat
            </span>
          </button>
          <div>
            <h1 className="mt-10 border-b border-gray-800 font-bold">
              Recent <span className="text-primary">chats</span>
            </h1>
            {state.prevPrompt.length > 0 ? (
              state.prevPrompt.map((item, index) => (
                <ol
                  key={index}
                  className=" border-gray-400 font-extralight leading-"
                >
                 {index + 1}. {item.length > 15 ? item.slice(0, 13) + "..." : item}
                </ol>
              ))
            ) : (
              <p className="font-extralight">No recent chats</p>
            )}
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
