import { Component } from "react";

class People extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      people: [],
      person: null,
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((people) => this.setState({ people }));
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { search, people } = this.state;
    const person = people.find(
      (person) =>
        search && person.name.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({ person, search: "" });
  };

  render() {
    const { person } = this.state;

    return (
      <div className="people">
        <p>Search for a Person</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

        {person ? (
          <div>
            <p>{person && person.name}</p>
            <p>{person && person.gender}</p>
            <p>{person && person.age}</p>
          </div>
        ) : (
          "Not Found"
        )}
      </div>
    );
  }
}

export default People;
