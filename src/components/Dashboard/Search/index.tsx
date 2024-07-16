import React from "react";
import styles from "./search.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import axios from "axios";
import { dashboardActions } from "../../../store/dashboard";
import { useState } from "react";
import { ReactComponent as SearchLightTheme } from '../../../assets/svg/search_light.svg';
import { ReactComponent as SearchDarkTheme } from '../../../assets/svg/search_dark.svg';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const pokemon = useAppSelector((state) => state.dashboard.pokemon);

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  }

  const handleSearchKeyEnter = (event: any) => {
    if (event.key === 'Enter') {
      handleSubmitSearch();
    }
  }

  const handleSubmitSearch = () => {
    if(search === ''){
      dispatch(dashboardActions.updateSearchStatus(false));
      dispatch(dashboardActions.replacePokemonBySearch(pokemon));
    }
    else{
      const pokemonFiltered = pokemon.filter((pokemon) => pokemon.name.includes(search));
      dispatch(dashboardActions.updateSearchStatus(true));
      dispatch(dashboardActions.replacePokemonBySearch(pokemonFiltered));
    }
  }

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-group"]}>
        <input onKeyDown={handleSearchKeyEnter} onChange={handleSearchChange} type="text" placeholder="E.g., Pikachu, Abomasnow, Beldum" />
        <div className={styles["svg-style"]}><SearchLightTheme /></div>
      </div>
    </div>

  );
};

export default Search;
