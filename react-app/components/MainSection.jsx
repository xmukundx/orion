import { useContext } from "react";
import Context from "../src/context/Context";
import MarkdownProcessor from "./MarkDown";

const MainSection = () => {
  const { state, dispatch } = useContext(Context);

  const obj = {
    "Fix grammar of any sentence":
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
    <section id="sec1" className="flex h-full w-full flex-col pb-5">
      {state.showResult ? (
        <div
          id="result-container"
          className="mx-auto overflow-y-auto w-[75%]"
          // style={{ width: "75%" }}
        >
          <div className="flex h-12 items-center gap-2">
            <span className="text-2xl font-bold text-primary">O</span>{" "}
            <h1 className="text-md font-semibold text-secondary">
              {state.recentPrompt}
            </h1>
          </div>
          <MarkdownProcessor />
        </div>
      ) : (
        <div className="h-full">
          <div>
          <h1 className="text-7xl flex items-end justify-center pl-10 h-56">Ask&nbsp;<span className="text-primary">o</span> rion anything</h1>

          </div>
          <div id="suggestions" className="flex items-end h-[22rem]">
            <div className="mx-auto grid grid-cols-2 gap-4">
              {Object.keys(obj).map((key) => (
                <div
                  key={key}
                  className="mx-auto h-fit w-[400px] cursor-pointer rounded-md bg-zinc-800 px-2 py-3 hover:bg-zinc-700"
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
