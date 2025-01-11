import { useContext } from "react";
import Context from "../src/context/Context";

const InputSection = () => {
  const { state, dispatch, onSent, inputRef } = useContext(Context);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSent();
    }
  };

  return (
    <section
      id="sec2"
      className="item-center flex w-[90%] mx-auto justify-center gap-4 pt-2"
    >
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
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${
          state.isLoading
            ? "border-gray-300 bg-zinc-800 text-gray-100"
            : "primary-color border-purple-500 bg-primary"
        } duration-500 active:scale-[0.98]`}
        onClick={onSent}
        disabled={state.isLoading}
      >
        <svg
          fill={state.isLoading ? "#CCCCCC" : "#000000"}
          className={`h-6 w-6 ${state.isLoading ? "scale-[0.70] animate-spin" : ""}`}
          width="30px"
          height="30px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Send</title>
          <path d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z" />
        </svg>
      </button>
    </section>
  );
};

export default InputSection;
