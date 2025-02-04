import "./App.css";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import InputSection from "../components/InputSection";

function App() {
  return (
    <>
      <main className="relative m-0 flex h-screen bg-zinc-900 text-secondary">
        <Sidebar />
        <div className="flex w-full flex-col">
          <MainSection />
          <InputSection />
        </div>
      </main>
    </>
  );
}

export default App;
