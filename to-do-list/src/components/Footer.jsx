import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi";


const Footer = () => {
    return <footer>
      <h1><HiOutlineSparkles />To do list app</h1>
      <div className="Links">
        <Link to="/">Hem</Link>
        <Link to="/TodoPage">To do list</Link>
        <Link to="/GamePage">Game</Link>
      </div>
    </footer>
}

export default Footer;