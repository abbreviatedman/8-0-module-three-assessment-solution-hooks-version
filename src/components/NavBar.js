import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img
          src="https://kottke.org/plus/misc/images/nino4-1400.jpg"
          width="50px"
          alt="studio ghibli screenshot"
        />
      </Link>
      <Link to="/movies">
        <p>Movies</p>
      </Link>
      <Link to="/people">
        <p>People</p>
      </Link>
      <Link to="/locations">
        <p>Locations</p>
      </Link>
    </nav>
  );
}

export default NavBar;
