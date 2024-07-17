import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IStats{
  hp: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number
}

export interface IPokemon {
  id: number,
  name: string,
  svg: string,
  type: string,
  stats: IStats
}

interface InitialDashboardState {
  pokemon: IPokemon[];
  pokemonBySearch: IPokemon[];
  themeIsDark: boolean;
  isSearching: boolean;
}

const initialDashboardState: InitialDashboardState = {
  pokemon: [],
  pokemonBySearch: [],
  themeIsDark: false,
  isSearching: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {
    updatePokemon(state, action: PayloadAction<IPokemon[]>){
      state.pokemon = [...state.pokemon, ...action.payload];
    },
    updatePokemonBySearch(state, action: PayloadAction<IPokemon[]>){
      state.pokemonBySearch = [...state.pokemonBySearch, ...action.payload];
    },
    replacePokemon(state, action: PayloadAction<IPokemon[]>){
      state.pokemon = [...action.payload];
    },
    replacePokemonBySearch(state, action: PayloadAction<IPokemon[]>){
      state.pokemonBySearch = [...action.payload];
    },
    updateTheme(state, action: PayloadAction<boolean>){
      state.themeIsDark = action.payload;
    },
    updateSearchStatus(state, action: PayloadAction<boolean>){
      state.isSearching = action.payload;
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice.reducer;
