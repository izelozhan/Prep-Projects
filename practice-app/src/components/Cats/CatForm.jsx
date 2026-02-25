import { useCallback, useState } from "react";

const INITIAL_VALUES = {
  catName: "",
  catDescription: "",
  catBreed: "",
  catAge: "",
  catFavoriteToy: "",
};

function CatForm({onCatAdded}) {
  const [formData, setFormData] = useState(INITIAL_VALUES);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    onCatAdded?.({ ...formData });
  }, [onCatAdded, formData]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const resetForm = () => {
    setFormData(INITIAL_VALUES);
  };

  return (
    <div id="form-container">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Cat name: </label>
        <input
          type="text"
          name="catName"
          onChange={handleChange}
          value={formData.catName}
        />
        <label>Cat description: </label>
        <input
          type="text"
          name="catDescription"
          onChange={handleChange}
          value={formData.catDescription}
        />
        <label>Cat breed: </label>
        <input type="text" name="catBreed" onChange={handleChange} />
        <label>Cat age: </label>
        <input type="number" name="catAge" onChange={handleChange} />
        <label>Cat favorite toy: </label>
        <input type="text" name="catFavoriteToy" onChange={handleChange} />
        <button type="submit" style={{ marginTop: "10px" }}>
          Add Your Cat!
        </button>
        <button
          type="button"
          name="reset"
          aria-label="reset-button"
          onClick={resetForm}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default CatForm;
