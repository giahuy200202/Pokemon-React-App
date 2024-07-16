

import React, { useEffect } from "react";
import styles from "./pokemon.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BeatLoader from "react-spinners/BeatLoader";
import { dashboardActions, IPokemon } from "../../store/dashboard";
import axios from "axios";

const Pokemon: React.FC<{eachPokemon: IPokemon}> = ({ eachPokemon }) => {
    return (
        <div className={styles["each-pokemon-container"]}>
            <img src={eachPokemon.svg} />
            <h3>{eachPokemon.name}</h3>
        </div>

    );
};

export default Pokemon;
