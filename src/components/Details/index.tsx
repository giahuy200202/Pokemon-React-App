import React from "react";
import styles from "./details.module.css";

import { useAppSelector } from "../../hooks/ReduxHooks";
import { useEffect } from "react";
import { IPokemon } from "../../store/dashboard"
import { useParams } from "react-router-dom";

const DetailsComponent: React.FC = () => {

    const { id } = useParams();
    const pokemon = useAppSelector((state) => state.dashboard.pokemon);
    const [pokemonDetails, setPokemonDetails] = React.useState<IPokemon>();

    useEffect(() => {
        const getPokemonDetailsById = pokemon.find((pokemon) => pokemon.id === parseInt(id!));
        console.log('pokemon ', pokemon);
        console.log('getPokemon details: ', getPokemonDetailsById);
        setPokemonDetails(getPokemonDetailsById);
    }, []);

    return (
        <div className={styles["details-container"]} >
            <div className={styles["img-container"]}>
                <img src={pokemonDetails?.svg} alt={pokemonDetails?.name} />
            </div>
            <div className={styles["info-container"]}>
                <p>Name: {pokemonDetails?.name}</p>
                <p>Type: {pokemonDetails?.type}</p>
                <p>Stats:</p>
                <p>- HP: {pokemonDetails?.stats.hp}</p>
                <p>- Attack: {pokemonDetails?.stats.attack}</p>
                <p>- Defense: {pokemonDetails?.stats.defense}</p>
                <p>- Special Attack: {pokemonDetails?.stats.specialAttack}</p>
                <p>- Special Defense: {pokemonDetails?.stats.specialDefense}</p>
                <p>- Speed: {pokemonDetails?.stats.speed}</p>
            </div>

        </div>
    );
};

export default DetailsComponent;
