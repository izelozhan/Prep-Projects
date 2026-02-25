import { useContext } from "react";
import CatContext from "./CatContext";

export function useCatContext() {
  return useContext(CatContext);
}

//this is custom hook for reusable way for components to access the CatContext.
//instead of importing useContext and CatContext seperately in every component that needs the context

//we can just import this hook to get data. 
