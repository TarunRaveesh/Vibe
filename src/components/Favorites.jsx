import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css"; //

const Favorites = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button className="favorites-btn" onClick={toggleFavorite}>
      Favourites <FontAwesomeIcon
        icon={faHeart}
        className={isFavorite ? "favorite" : ""}
      />
    </button>
  );
};

export default Favorites;
