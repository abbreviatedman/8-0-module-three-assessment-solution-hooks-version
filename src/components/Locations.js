import { Component } from "react";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      showLocations: false,
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((locations) => this.setState({ locations }));
  }

  toggleShowLocations = () => {
    this.setState({ showLocations: !this.state.showLocations });
  };

  render() {
    const { locations, showLocations } = this.state;
    const locationItems = locations.map((location) => {
      return <li>{location.name}</li>;
    });

    return (
      <div>
        <p>List of Locations</p>
        <ul className="locations">{showLocations && locationItems}</ul>
        <button onClick={this.toggleShowLocations}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
      </div>
    );
  }
}

export default Locations;
