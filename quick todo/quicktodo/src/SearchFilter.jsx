import { useState } from "react";

export const SearchFilter = () => {
  const fruits = [
    "Apple",
    "Apricot",
    "Elderberry",
    "Fig",
    "Cherry",
    "Grapefruit",
    "Watermelon",
  ];

  const [fruitsData, setFruitData] = useState(fruits);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fruitsDataFiltered = fruitsData.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="text here" onChange={handleInputChange} />
      {fruitsDataFiltered.map((fruit) => {
        return <p>{fruit}</p>;
      })}
    </div>
  );
};
