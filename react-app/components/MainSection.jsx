import { useContext } from "react";
import Context from "../src/context/Context";
import MarkdownProcessor from "./MarkDown";
import Header from "./Header";
const MainSection = () => {
  const { state, resultData } = useContext(Context);

  const obj = {
    "Fix grammar of a sentence":
      "Please check the grammar in this sentence: [Your_Sentence]",
    "Check spelling of any word ":
      "Please check the spelling in this word: [Your_Word]",
    "What does a word mean?": "Define the word '[Word]'",
    "Write a email":
      "Draft an email to [Recipient Name] with the following information: [Bullet points or brief outline of the email content]",
  };

  // const handleKeyClick = (key) => {
  //   // dispatch({ type: "setInput", payload: obj[key] });
  // };


  return (
    <section id="sec1" className="flex flex-col">
      {!state.isAsideOpen && (
        <Header/>
      )}
      {state.showResult ? (
        <div id="result-container" className="">
          <div className="mx-auto flex h-[10vh] w-[80%] items-center gap-1 pt-5 md:w-[70%]">
            <span className="text-2xl font-bold text-primary">O</span>{" "}
            {resultData.length > 10 && (
              <h1 className="md:text-lg  font-semibold ">
                {state.recentPrompt[0].toUpperCase() +
                  state.recentPrompt.slice(1)}
              </h1>
            )}
          </div>
          <div className="h-[70vh]">
            <MarkdownProcessor />
          </div>
        </div>
      ) : (
        <div className="h-[80vh]">
          <div className=" ">
            <h1 className="flex h-56 items-end justify-center text-2xl text-4xl md:text-7xl">
              Ask&nbsp;<span className="text-primary">o</span> rion anything
            </h1>
          </div>
          <div id="suggestions" className="h-[60%]">
            <div className="mx-auto grid h-full w-[71%] grid-cols-1 grid-rows-1 place-items-end justify-end gap-3 sm:grid-cols-2 md:max-w-[60%]">
              {Object.keys(obj).map((key) => (
                <div
                  key={key}
                  className="mx-auto h-fit w-full min-w-56 cursor-pointer rounded-md bg-zinc-800 px-2 py-3 hover:bg-zinc-700"
                  onClick={() =>{}}
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
