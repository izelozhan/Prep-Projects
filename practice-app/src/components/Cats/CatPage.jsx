import CatProvider from "./CatProvider";
import { useCatContext } from "./useCatContext";
import CatForm from "./CatForm";
import CatList from "./CatList";
import Header from './Header';

function CatPage() {
  const { data, onCatAdded } = useCatContext(); // context objects are data,onCatAdded

  return (
    <>
      <Header />
      <CatProvider>
        <CatForm onCatAdded={onCatAdded} />
        <CatList data={data} />
      </CatProvider>
    </>  
  );
}

export default CatPage;
