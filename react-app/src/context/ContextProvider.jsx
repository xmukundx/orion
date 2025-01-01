import { useEffect, useReducer, useState } from "react";
import Context from "./Context";
const ContextProvider = ({ children }) => {
  const initialState = {
    input: "",
    showResult: false,
    recentPrompt: "",
    prevPrompt: [],
    isLoading: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "setInput":
        return { ...state, input: action.payload };
      case "setIsLoading":
        return { ...state, isLoading: action.payload };
      case "setShowResult":
        return { ...state, showResult: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
  }, [resultData]);

  const onSent = async () => {
    dispatch({ type: "setIsLoading", payload: true });
   

    try {
      const response = await fetch("http://localhost:5000", {
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

          dispatch({ type: "updateResultData", payload: chunk });
          setResultData((prevData) => prevData + chunk);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      dispatch({ type: "setIsLoading", payload: false });
    }
  };

  return (
    <Context.Provider value={{ state, dispatch, onSent, resultData }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
