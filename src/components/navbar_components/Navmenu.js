import "./Navmenu.css";
import { Link } from "react-router-dom";

function Navmenu(props) {
  let displayStatus;

  if (props.status === true) {
    displayStatus = "flex";
  } else {
    displayStatus = "none";
  }

  return (
    <div className="navMenu" style={{ display: displayStatus }}>
      <Link className="navItem" to="/" onClick={() => props.handlIsOpen(false)}>
        home
      </Link>
      <Link
        className="navItem"
        to="/about"
        onClick={() => props.handlIsOpen(false)}
      >
        about
      </Link>
      <Link
        className="navItem"
        to="/blog"
        onClick={() => props.handlIsOpen(false)}
      >
        blog
      </Link>
      <Link
        className="navItem"
        to="/contact"
        onClick={() => props.handlIsOpen(false)}
      >
        contact
      </Link>
      <i
        className="fa-solid fa-xmark close"
        onClick={() => props.handlIsOpen(false)}
      ></i>
    </div>
  );
}

export default Navmenu;
