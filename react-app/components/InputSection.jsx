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
    <section id="sec2" className="mx-auto flex w-[90%] flex-col pt-5 md:pt-10">
      <div className="flex h-full items-center justify-center gap-4">
        <input
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "setInput", payload: e.target.value })
          }
          onKeyDown={handleKeyDown}
          ref={inputRef}
          className={`h-11 w-[60%] rounded-lg border border-gray-800 bg-zinc-800 px-2 py-1 ring-gray-800 focus:outline-none focus:ring-2 focus:ring-primary`}
          type="text"
        />
        <button
          className={`grid h-12 w-12 rounded-full ${
            state.isLoading ? "animate-spin bg-zinc-800" : "bg-primary"
          } duration-500 active:scale-[0.90]`}
          onClick={onSent}
          disabled={state.isLoading}
        >
          <IoMdSend className="h-7 w-7 place-self-center text-secondary" />
        </button>
      </div>
    </section>
  );
};

export default InputSection;
