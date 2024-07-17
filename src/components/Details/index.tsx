import React from "react";
import styles from "./details.module.css";

import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { useEffect } from "react";
import { dashboardActions, IPokemon } from "../../store/dashboard"
import { useNavigate, useParams } from "react-router-dom";

const DetailsComponent: React.FC = () => {

    const { id } = useParams();
    const pokemon = useAppSelector((state) => state.dashboard.pokemon);
    const [pokemonDetails, setPokemonDetails] = React.useState<IPokemon>();
    const navgigate = useNavigate();
    const dispatch = useAppDispatch();

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
                <h1>{pokemonDetails?.name}</h1>
                <p>Id: {pokemonDetails?.id}</p>
                <p>Type: {pokemonDetails?.type}</p>
                <p>Stats:</p>
                <div className={styles["info-items"]}>
                    <p>- HP: {pokemonDetails?.stats.hp}</p>
                    <p>- Attack: {pokemonDetails?.stats.attack}</p>
                    <p>- Defense: {pokemonDetails?.stats.defense}</p>
                    <p>- Special Attack: {pokemonDetails?.stats.specialAttack}</p>
                    <p>- Special Defense: {pokemonDetails?.stats.specialDefense}</p>
                    <p>- Speed: {pokemonDetails?.stats.speed}</p>
                </div>
                <div onClick={()=>{
                    dispatch(dashboardActions.replacePokemon([]));
                    dispatch(dashboardActions.replacePokemonBySearch([]));
                    navgigate('/');
                }} className={styles["button-back"]}>{'Back to homepage'}</div>
            </div>

        </div>
    );
};

export default DetailsComponent;
