import { useMemo } from "react";

function CatList({ data }) {
  const namesWithCount = useMemo(
    () =>
      data.reduce((acc, curr) => {
        if (acc.has(curr.name)) {
          const newCount = acc.get(curr.name) + 1;
          acc.set(curr.name, newCount);
        } else {
          acc.set(curr.name, 1);
        }
        return acc;
      }, new Map()),
    [data],
  );

  const listItems = useMemo(
    () =>
      data.map((i) => {
        //title = name - breed
        //age = age - human age
        // toy
        return {
          title: `${i.name} - ${i.breed}`,
          age: `${i.age} yo - Human age: ${i.age / 5}`,
          favoriteToy: i.favoriteToy,
          image: i.image,
          description: i.description,
          count: namesWithCount.get(i.name),
        };
      }),
    [data, namesWithCount],
  );

  return (
    <div id="card-container">
      {listItems.map((cat, ndx) => (
        <div className="cat-card" key={ndx}>
          <div>
            <img
              className="cat-image"
              alt="cat-image"
              aria-label="cat-image"
              src={cat.image}
            />
          </div>
          <div>
            <h3>Let's meet with: {cat.title}</h3>
            <p>{cat.description}</p>
            <ul>
              <li>Cats with same name: {cat.count}</li>
              <li>Cat Age: {cat.age}</li>
              <li>Favorite Toy: {cat.favoriteToy}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatList;
