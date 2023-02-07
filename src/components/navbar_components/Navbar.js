import "./Navbar.css";
import { useState } from "react";
import Navmenu from "./Navmenu";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav container px-3 px-md-0">
          <Link className="logo" to="/">
            pure mix
          </Link>
          <i
            className="fa-solid fa-bars burgerBtn"
            onClick={() => setIsOpen(true)}
          ></i>
        </div>
      </header>
      <Navmenu status={isOpen} handlIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
