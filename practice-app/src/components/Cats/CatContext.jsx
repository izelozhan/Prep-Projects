import { createContext } from "react";
import { mockCats } from "../../api/mockData";

//first use createContext to create a context object
// it can accept default value(in this case it's null);
// which is used when a component consumes the context without a matching provider above it in the tree

const CatContext = createContext({data: mockCats, onCatAdded: () => {}});

export default CatContext;

//next step is provider ---- 