import { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import Context from "../src/context/Context";
import { AiFillEdit } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import Modal from "./Modal";

const Header = () => {
  const { state, dispatch, inputRef, clearData } = useContext(Context);
  const handleModal = () => {
    dispatch({ type: "setIsModalOpen" });
  };

  return (
    <header className="relative top-5 flex items-center gap-2 pl-5 text-2xl sm:fixed sm:left-8 sm:flex-col sm:pl-0">
      <p className="hidden text-5xl font-bold text-primary sm:block hover:cursor-pointer" onClick={clearData}>O</p>

      <button
        onClick={() => dispatch({ type: "setIsAsideOpen", payload: true })}
        title="Open menu"
        className={`cursor-pointer rounded-md border border-gray-800 p-2 hover:text-primary`}
      >
        <IoMenu  />
      </button>
      <button
        title="Start new chat"
        onClick={() => inputRef.current.focus()}
        className={`hidden cursor-pointer rounded-md border border-gray-800 p-2 hover:text-primary sm:block`}
      >
        <AiFillEdit  />
      </button>
      <button
        className={`absolute right-5 cursor-pointer rounded-md border border-gray-800 p-2 hover:text-primary sm:static`}
        onClick={handleModal}
      >
        <FaInfo  />
      </button>
      {state.isModalOpen && <Modal handleModal={handleModal} />}
    </header>
  );
};

export default Header;
