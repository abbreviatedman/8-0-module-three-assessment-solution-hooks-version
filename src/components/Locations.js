import { useEffect, useState } from "react";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((locations) => setLocations(locations));
  }, []);

  const toggleShowLocations = () => {
    setShowLocations(!showLocations);
  };

  const locationItems = locations.map((location) => {
    return <li>{location.name}</li>;
  });

  return (
    <div>
      <p>List of Locations</p>
      <ul className="locations">{showLocations && locationItems}</ul>
      <button onClick={toggleShowLocations}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
    </div>
  );
};

export default Locations;
