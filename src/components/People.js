import { useEffect, useState } from "react";

const People = () => {
  const [search, setSearch] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((people) => setPeople(people));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const person = people.find(
      (person) =>
        search && person.name.toLowerCase().includes(search.toLowerCase())
    );

    setPerson(person);
    setSearch("");
    setHasSearched(true);
  };

  return (
    <div className="people">
      <p>Search for a Person</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {!person && hasSearched && "Not Found"}
      {person && (
        <div>
          <p>{person.name}</p>
          <p>{person.gender}</p>
          <p>{person.age}</p>
        </div>
      )}
    </div>
  );
};

export default People;
