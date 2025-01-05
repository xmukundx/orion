import { useContext } from "react";
import Context from "../src/context/Context";
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
    <section id="sec1" className="flex h-full w-full flex-col ">
      {state.showResult ? (
        <div className="overflow-y-auto mx-auto"
        style={{width: "75%"}}>
          <MarkdownProcessor />

        </div>
      ) : (
        <div id="suggestions" className="suggestions-container">
          <div className="mx-auto grid grid-cols-2 place-items-end gap-4">
            {Object.keys(obj).map((key) => (
              <div
                key={key}
                className="h-fit cursor-pointer rounded-md bg-zinc-800 px-2 py-3 hover:bg-zinc-700"
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultSection;
