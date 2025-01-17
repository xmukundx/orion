import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ handleModal }) => {
  const [isClosing, setIsClosing] = useState(false);

  const modalRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(handleModal, 300); // fade-out effect to finish before calling onClose
  };
  const handleClickOutside = (e) => {
    // if (modelRef.current && !modelRef.current.contains(e.target)) {
    //   handleClose();
    // }
    if (e.target === modalRef.current) {
      handleClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={handleClickOutside}
      className={`fixed left-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-gray-400 bg-opacity-0 bg-clip-padding backdrop-blur-md backdrop-filter transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"}`}
    >
      <p className="relative w-[50vw] text-justify text-lg sm:text-2xl font-bold text-gray-400">
        <IoMdClose
          className="absolute md:-right-16 md:-top-16 -right-10 -top-10 m-5 rounded-md border border-primary hover:cursor-pointer hover:text-primary"
          onClick={handleClose} // Close modal on click
        />
        <span className="text-primary ">Orion</span>
        {
          "'s primarily focus on user privacy. Unlike many other search engines, We does not track users or collect personal information. Your personal data is nobody's business. We provide anonymous access to popular Google AI model Gemini AI."
        }
      </p>
    </div>
  );
};

export default Modal;
