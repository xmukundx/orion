import { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import Context from "../src/context/Context";
import { AiFillEdit } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import Modal from "./Modal";

const Header = () => {
  const { state, dispatch, inputRef } = useContext(Context);
  const handleModal = () => {
    dispatch({ type: "setIsModalOpen" });
  };

  return (
    <header className="relative top-5 flex items-center gap-2 pl-5 text-2xl sm:fixed sm:left-8 sm:flex-col sm:pl-0">
      <p className="hidden text-5xl font-bold text-primary sm:block">O</p>
      <h1 className="hidden text-4xl font-bold">
        <span className="text-primary">O</span>
        <span className="">rion</span>
      </h1>

      <button
        onClick={() => dispatch({ type: "setIsAsideOpen" })}
        title="Open menu"
        className={`w-fit cursor-pointer rounded-md border border-gray-800 text-secondary p-2`}
      >
        <IoMenu />
      </button>
      <button
        title="Start new chat"
        onClick={() => inputRef.current.focus()}
        className={`w-fit hidden sm:block cursor-pointer rounded-md border border-gray-800 text-secondary p-2`}
      >
        <AiFillEdit />
      </button>
      <button
        className={`w-fit cursor-pointer rounded-md border border-gray-800 text-secondary p-2 absolute sm:static right-5`}
        onClick={handleModal}
      >
        <FaInfo />
      </button>
      {state.isModalOpen && <Modal handleModal={handleModal} />}
    </header>
  );
};

export default Header;
