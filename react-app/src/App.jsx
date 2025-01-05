import {
  useContext,
  // , useEffect, useState
} from "react";
import "./App.css";
import Context from "./context/Context";
import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
import MainSection from "../components/MainSection";
import InputSection from "../components/InputSection";
import MenuSection from "../components/MenuSection";

function App() {
  const { state, dispatch, onSent } = useContext(Context);

  return (
    <>
      <main className="m-0 flex h-screen bg-zinc-900 text-secondary ">
        <MenuSection/>
        <Sidebar />
        <div className="flex w-full flex-col justify-around">
          <div className="flex flex-col">
            {/* <div className="h-fit ">
              <Header />
            </div> */}
            <div className="h-[32rem]">
              <MainSection />
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
