import { useEffect, useState } from "react";
import Pet from "./Pet";

const animals = ["dog", "cat", "bird"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getPets = async () => {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}`,
    );
    const json = await res.json();
    setPets(json.pets);
    console.log(json.pets);
  };

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          disabled={!animals.length}
          value={animal}
          placeholder="Animal"
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option value="" />
          {animals.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))}
    </div>
  );
};

export default SearchParams;
