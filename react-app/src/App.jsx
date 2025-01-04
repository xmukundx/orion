import {
  useContext,
  // , useEffect, useState
} from "react";
import "./App.css";
import Context from "./context/Context";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ResultSection from "../components/ResultSection";
import InputSection from "../components/InputSection";

function App() {
  const { state, dispatch, onSent } = useContext(Context);

  return (
    <>
      <main className="m-0 flex h-screen bg-zinc-900 p- font-mono text-white">
        <Sidebar />
        <div className="flex w-full flex-col justify-between">
          <div className="flex flex-col">
            <div className="h-[10rem]">
              <Header />
            </div>
            <div className="h-[30rem]">
              <ResultSection />
            </div>
          </div>
          <InputSection
            input={state.input}
            dispatch={dispatch}
            onSent={onSent}
            isLoading={state.isLoading}
          />
        </div>
      </main>
    </>
  );
}

export default App;
