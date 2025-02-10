"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import initialStates from "./initialStates";
import { ContextState, ContextType } from "../types";

export const GlobalContext = createContext<ContextType<ContextState>>({
  contextState: initialStates,
  contextDispatch: () => {},
});

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contextState, contextDispatch] = useState(initialStates);

  return (
    <GlobalContext.Provider value={{ contextState, contextDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useDashboardContext = () => {
  const { contextState, contextDispatch } = useContext(GlobalContext);

  const setContextState = (state: Partial<ContextState>) => {
    contextDispatch({ ...contextState, ...state });
  };
  useEffect(() => {
    localStorage.setItem("initialStates", JSON.stringify(contextState));
  }, [contextState, contextDispatch]);
  return { contextState, setContextState };
};
