import React from "react";
import styles from "./navbar.module.css";
import pokemon from "../../assets/images/pokemon_logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className={styles["nav-container"]}>
      <img src={pokemon} alt="pokemon-img"/>
    </nav>
  );
};

export default Navbar;
