import { useContext } from "react";
import Context from "../src/context/Context";
import { IoMdSend } from "react-icons/io";


const InputSection = () => {
  const { state, dispatch, onSent, inputRef } = useContext(Context);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSent();
    }
  };

  return (
    <section id="sec2" className="mx-auto  flex h-full w-[90%] flex-col pt-2">
      <div className=" h-full flex items-center justify-center gap-4">
        <input
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "setInput", payload: e.target.value })
          }
          onKeyDown={handleKeyDown}
          ref={inputRef}
          className="h-11 w-[60%] rounded-lg border border-primary bg-zinc-800 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
        />
        <button
          className={`h-12 w-12 grid  rounded-full ${
            state.isLoading
              ? "border-gray-300 bg-zinc-800 text-gray-100"
              : "bg-primary border-purple-500"
          } duration-500 active:scale-[0.98]`}
          onClick={onSent}
          disabled={state.isLoading}
        >
          <IoMdSend className="text-secondary w-7 h-7 place-self-center"/>

        </button>
      </div>
    </section>
  );
};

export default InputSection;
