import { Routes, Route, Link } from "react-router-dom";
import CatPage from "./components/Cats/CatPage";
import "./styles/App.css";
import DogsHeader from "./components/Dogs/DogsHeader";

function App() {
  return (
    <>
      <div>
        <Link to="/dogs">
          <button>Go to Dogs</button>
        </Link>
        <Routes>
          <Route path="/" element={<CatPage />} />
          <Route path="/dogs" element={<DogsHeader />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
