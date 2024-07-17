import React from "react";
import styles from "./search.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import axios from "axios";
import { dashboardActions } from "../../../store/dashboard";
import { useState } from "react";
import { ReactComponent as SearchLightTheme } from '../../../assets/svg/search_light.svg';
import { ReactComponent as SearchDarkTheme } from '../../../assets/svg/search_dark.svg';
import { ReactComponent as CheckIcon } from '../../../assets/svg/check.svg';
import { ReactComponent as UncheckIcon } from '../../../assets/svg/uncheck.svg';
import { ReactComponent as UncheckIconDark } from '../../../assets/svg/uncheck_dark.svg';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>('');
  const pokemon = useAppSelector((state) => state.dashboard.pokemon);
  const [typeIsChecked, setTypeIsChecked] = useState<number>(-1);

  const typeFilter = ['grass', 'fire', 'water', 'bug'];

  const themeIsDark = useAppSelector((state) => state.dashboard.themeIsDark);

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  }

  const handleSearchKeyEnter = (event: any) => {
    if (event.key === 'Enter') {
      handleSubmitSearch();
    }
  }

  const handleSubmitSearch = () => {
    if (search === '') {
      dispatch(dashboardActions.updateSearchStatus(false));
      dispatch(dashboardActions.replacePokemonBySearch(pokemon));
    }
    else {
      const pokemonFiltered = pokemon.filter((pokemon) => pokemon.name.includes(search));
      dispatch(dashboardActions.updateSearchStatus(true));
      dispatch(dashboardActions.replacePokemonBySearch(pokemonFiltered));
    }
  }

  const handleSubmitFilter = (index: number) => {
    if(index === typeIsChecked){
      setTypeIsChecked(-1);
      dispatch(dashboardActions.updateSearchStatus(false));
      dispatch(dashboardActions.replacePokemonBySearch(pokemon));
    }
    else{
      setTypeIsChecked(index);
      const pokemonFiltered = pokemon.filter((pokemon) => pokemon.type.includes(typeFilter[index]));
      console.log('pokemonFiltered', pokemonFiltered);
      dispatch(dashboardActions.updateSearchStatus(true));
      dispatch(dashboardActions.replacePokemonBySearch(pokemonFiltered));
    }
  }

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-group"]} >
        <input style={{
          backgroundColor: themeIsDark ? '#212529' : '', 
          borderColor: themeIsDark ? '#495057' : '',
          color: themeIsDark ? '#adb5bd' : ''
          }} 
          onKeyDown={handleSearchKeyEnter} 
          onChange={handleSearchChange} 
          type="text" 
          placeholder="E.g., Pikachu, Abomasnow, Beldum" 
        />
        <div className={styles["svg-style"]}><SearchLightTheme /></div>
      </div>
      <div className={styles["filter-group"]} >
        {typeFilter.map((type, index) => (
          <div
            onClick={() => handleSubmitFilter(index)}
            className={styles["filter-items"]}
            style={{ 
              borderColor: themeIsDark ?  typeIsChecked === index ? '#748ffc' : '#495057' : typeIsChecked === index ? '#748ffc' : '', 
              backgroundColor: themeIsDark ?  typeIsChecked === index ? '#343a40' : '' : typeIsChecked === index ? '#edf2ff' : '' 
            }}
          >
            <div className={styles["filter-title"]} >
              {type}
            </div>
            <div className={styles["filter-icon"]}>
              {typeIsChecked === index ? <CheckIcon /> : themeIsDark ? <UncheckIconDark />: <UncheckIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Search;
