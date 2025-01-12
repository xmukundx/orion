import {
  useContext,
  // , useEffect, useState
} from "react";
import "./App.css";
// import Test from "./Test";
import Context from "./context/Context";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import InputSection from "../components/InputSection";
// import MenuSection from "../components/MenuSection";
// import LogoAnimation from "../components/LogoAnimation";


function App() {
  const { state, dispatch, onSent } = useContext(Context);

  return (
    <>
       <main className="m-0 flex h-screen relative bg-zinc-900 text-secondary ">
       
        <Sidebar />
        <div className="flex w-full flex-col ">
          <div className="flex flex-col">
            
            <div className="">
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
