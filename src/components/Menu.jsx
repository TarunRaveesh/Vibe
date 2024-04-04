import React from "react";
import "../styles/Menu.css"; // Assuming you'll create this CSS file

const Menu = () => {
  return (
    <nav className="category-menu">
      <ul>
        <li>
          <a href="#">Live Shows</a>
        </li>
        <li>
          <a href="#">Streams</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Plays</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
        <li>
          <a href="#">Activities</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
