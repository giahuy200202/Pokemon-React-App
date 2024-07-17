import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./result.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import 'react-multi-carousel/lib/styles.css';
import BeatLoader from "react-spinners/BeatLoader";
import { dashboardActions, IPokemon } from "../../../store/dashboard";
import axios from "axios";
import Pokemon from "../../Pokemon";
import { useNavigate } from "react-router-dom";


const Result: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pokemonBySearch = useAppSelector((state) => state.dashboard.pokemonBySearch);
  const isSearching = useAppSelector((state) => state.dashboard.isSearching);
  const [offset, setOffset] = useState<number>(0);
  const themeIsDark = useAppSelector((state) => state.dashboard.themeIsDark);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const fetchPokemon = async (offset: number) => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
      .then((res) => {
        const pokemonForDispatch: IPokemon[] = [];
        const lengthOfPokemon = res.data.results.length;
        for (let i = 0; i < lengthOfPokemon; i++) {
          axios.get(res.data.results[i].url).then((res) => {
            const pokemonResponse: IPokemon = {
              id: res.data.id,
              name: res.data.species.name,
              svg: res.data.sprites.other.dream_world.front_default,
              type: res.data.types[0].type.name,
              stats: {
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                specialAttack: res.data.stats[3].base_stat,
                specialDefense: res.data.stats[4].base_stat,
                speed: res.data.stats[5].base_stat
              }
            }
            pokemonForDispatch.push(pokemonResponse);
            if (i === lengthOfPokemon - 1) {
              dispatch(dashboardActions.updatePokemonBySearch(pokemonForDispatch));
              dispatch(dashboardActions.updatePokemon(pokemonForDispatch));
              setIsLoading(false);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPokemon(offset);
  }, [offset]);

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + 20);
  };

  const intersectionObserver = useRef<IntersectionObserver | null>(null);

  const lastRef = useCallback(
    (element: Element | null) => {
      if (isLoading) return;
      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }
      intersectionObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isSearching) {
          loadMore();
        }
      });
      if (element) {
        intersectionObserver.current.observe(element);
      }
    },
    [isLoading, loadMore]
  );

  return (
    <div>
      {pokemonBySearch.length === 0 ?
        <div className={styles["no-result"]}>No result found</div> :
        <div className={styles["result-container"]}>
          {pokemonBySearch.map((eachPokemon, index) => {
            if (index + 1 === pokemonBySearch.length) {
              return (
                <div
                  onClick={() => { navigate(`/pokemon/${eachPokemon.id}`) }}
                  ref={lastRef}
                  className={styles["img-container"]}
                  key={eachPokemon.id}
                  style={{ borderColor: themeIsDark ? '#495057' : '', }}
                >
                  <Pokemon eachPokemon={eachPokemon} />
                </div>
              )
            }
            return (
              <div
                onClick={() => { navigate(`/pokemon/${eachPokemon.id}`) }}
                className={styles["img-container"]}
                key={eachPokemon.id}
                style={{ borderColor: themeIsDark ? '#495057' : '', }}
              >
                <Pokemon eachPokemon={eachPokemon} />
              </div>
            )
          })}
        </div>
      }

      {isLoading && <div className={styles["center-loader"]}>
        <BeatLoader
          color="#748ffc"
          margin={2}
          size={15}
          speedMultiplier={0.5}
        />
      </div>}
    </div>

  );
};

export default Result;
