import { useReducer, useRef, useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const initialState = {
    input: "",
    isAsideOpen: false,
    isModalOpen: false,
    showResult: false,
    recentPrompt: "",
    prevPrompt: [],
    isLoading: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setInput":
        return { ...state, input: action.payload };
      case "setIsAsideOpen":
        return { ...state, isAsideOpen: action.payload };
      case "setIsModalOpen":
        return {...state, isModalOpen: !state.isModalOpen};
      case "setIsLoading":
        return { ...state, isLoading: action.payload };
      case "setShowResult":
        return { ...state, showResult: action.payload };
      case "setPrevPrompt":
        return {
          ...state,
          prevPrompt: [...state.prevPrompt, action.payload],
        };
      case "setRecentPrompt":
        return { ...state, recentPrompt: state.input };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [resultData, setResultData] = useState([]);
  const inputRef = useRef(null);

  const onSent = async () => {
    if (state.input.length === 0) return alert('please wirte something');
    
    dispatch({ type: "setIsLoading", payload: true });
    dispatch({ type: "setPrevPrompt", payload: state.input });
    dispatch({ type: "setRecentPrompt" });
    dispatch({ type: "setInput", payload: "" }); // clearing input
    setResultData(""); // clearing prev data
    try {
      // const response = await fetch("http://localhost:5000", {
      const response = await fetch("https://orion-backend-pqzf.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: state.input }),
      });

      if (!response.body) {
        throw new Error("ReadableStream is not supported in this environment.");
      }

      dispatch({ type: "setShowResult", payload: true });
      const reader = response.body.getReader();

      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;

        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setResultData((prevData) => prevData + chunk);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch({ type: "setIsLoading", payload: false });
      
    }
  };

  const clearData = () => {
    dispatch({ type: "setShowResult", payload: false });
    setResultData("");
    dispatch({type: "setIsAsideOpen"})
    inputRef.current.focus();
  };


  return (
    <Context.Provider
      value={{ state, dispatch, onSent, resultData, setResultData, inputRef, clearData }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
