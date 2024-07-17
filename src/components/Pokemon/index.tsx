

import React from "react";
import styles from "./pokemon.module.css";
import 'react-multi-carousel/lib/styles.css';
import {  IPokemon } from "../../store/dashboard";

const Pokemon: React.FC<{eachPokemon: IPokemon}> = ({ eachPokemon }) => {
    return (
        <div className={styles["each-pokemon-container"]}>
            <img src={eachPokemon.svg} alt="pokemon-img"/>
            <h3>{eachPokemon.name}</h3>
        </div>

    );
};

export default Pokemon;
