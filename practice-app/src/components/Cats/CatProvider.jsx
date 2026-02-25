import { useState } from "react";
import { mockCats } from "../../api/mockData";
import CatContext from "./CatContext";

//wrap the components that need access to the data with the Context.Provider

//the provider accepts value prop, which holds the data you want to share. 

function CatProvider({ children }) {
  const [data, setData] = useState(mockCats);

  const onCatAdded = (cat) => {
    setData((prev) => [...prev, cat]);
  };

  const providerValues = {
    data,
    onCatAdded,
  };

  return (
    <>
      <CatContext.Provider value={providerValues}>
        {children}
      </CatContext.Provider>
    </>
  );
}

export default CatProvider;
