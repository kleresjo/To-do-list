import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi";

const Navbar = () => {
    return (
    <nav>
    <div className="Logo">
    <h1><HiOutlineSparkles className="Sparkles" />To do list app</h1>
    </div>
      <ul className="Links">
        <Link to="/">Hem</Link>
        <Link to="/TodoPage">To do list</Link>
        <Link to="/GamePage"><button className="nav-button">Game</button></Link>
      </ul>
    </nav>
    );
}

export default Navbar;