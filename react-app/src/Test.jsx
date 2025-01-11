import Header from "../components/Header";
import InputSection from "../components/InputSection";
const Test = () => {
  return (
    <div className="main bg-zinc-900 text-white">
      <div className=" border-2">
      <Header/>

      </div>
      <div className="border-2 item2">item2 red</div>
      <div className="border-2 item3">item3 green</div>
      <div className="border-2 item4">
      <InputSection/>
      </div>
      {/* <div className="bg-zinc-300 item5">item5 zinc</div> */}
    </div>
  );
};

export default Test;
