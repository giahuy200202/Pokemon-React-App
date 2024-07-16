import React from "react";
import styles from "./navbar.module.css";
import pokemon from "../../assets/images/pokemon_logo.png";
import { useAppSelector } from "../../hooks/ReduxHooks";

const Navbar: React.FC = () => {
  const theme = useAppSelector((state) => state.dashboard.theme);
  return (
    <nav className={styles["nav-container"]} style={{ background: theme=='black' ? 'red' : ''}}>
      <img src={pokemon} />
    </nav>
  );
};

export default Navbar;
