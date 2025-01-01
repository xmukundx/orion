import { useContext } from "react";
import Context from "../src/context/Context"
import MarkdownProcessor from "./MarkDown";

const ResultSection = () => {
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
    <section id="sec1" className="flex h-full flex-col w-full justify-around">
      {state.showResult ? (
        <MarkdownProcessor />
      ) : (
        <div className="mx-auto grid w-[80%] grid-cols-2 gap-4">
          {Object.keys(obj).map((key) => (
            <div
              key={key}
              className="cursor-pointer rounded-md bg-zinc-800 px-2 py-3 hover:bg-zinc-700"
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResultSection;
