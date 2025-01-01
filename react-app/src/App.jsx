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
      <main className="m-0 flex h-screen bg-zinc-900 p-0 font-mono text-white">
        <Sidebar />
        <div className="flex w-full flex-col justify-between bg-zinc-900">
          <Header />
          <ResultSection />
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
