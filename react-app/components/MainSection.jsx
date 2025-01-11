import { useContext } from "react";
import Context from "../src/context/Context";
import MarkdownProcessor from "./MarkDown";

const MainSection = () => {
  const { state, dispatch } = useContext(Context);

  const obj = {
    "Fix grammar of a sentence":
      "Please check the grammar in this sentence: [Your_Sentence]",
    "Check spelling of any word ":
      "Please check the spelling in this word: [Your_Word]",
    "What does a word mean?": "Define the word '[Word]'",
    "Write a email":
      "Draft an email to [Recipient Name] with the following information: [Bullet points or brief outline of the email content]",
  };

  const handleKeyClick = (key) => {
    dispatch({ type: "setInput", payload: obj[key] });
  };

  return (
    <section id="sec1" className="flex flex-col pb-5">
      {state.showResult ? (
        <div
          id="result-container"
          className=""
          // style={{ width: "75%" }}
        >
          <div className="flex h-14 pt-5 items-center gap-2 mx-auto w-[70%]">
            <span className="text-2xl font-bold text-primary">O</span>{" "}
            <h1 className="text-md font-semibold text-secondary">
              {state.recentPrompt}
            </h1>
          </div>
          <div className="h-[70vh]">

          <MarkdownProcessor />
          </div>
        </div>
      ) : (
        <div className="h-full">
          <div>
            <h1 className="flex h-56 items-end justify-center pl-10 text-7xl">
              Ask&nbsp;<span className="text-primary">o</span> rion anything
            </h1>
          </div>
          <div id="suggestions" className=" h-[350px] ">
            <div className="mx-auto grid h-[100%] w-[60%] grid-cols-1  grid-rows-1 place-items-end justify-end gap-4 sm:grid-cols-2 ">
              {Object.keys(obj).map((key) => (
                <div
                  key={key}
                  className="mx-auto  h-fit w-full min-w-56 cursor-pointer rounded-md bg-zinc-800 px-2 py-3 hover:bg-zinc-700"
                  onClick={() => handleKeyClick(key)}
                >
                  {key}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainSection;
