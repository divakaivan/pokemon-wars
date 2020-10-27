import React from 'react';
import {Route} from "react-router-dom"
import {Container, Loader} from "semantic-ui-react";
import MenuBar from "./components/MenuBar";
import {useAuth0} from "@auth0/auth0-react";
import { ReactQueryDevtools } from 'react-query-devtools'

import Profile from "./pages/Profile"
import Home from "./pages/Home";
import PokemonSearch from "./pages/PokemonSearch";
import Pokemon from "./pages/Pokemon";

function App() {
    const {isLoading} = useAuth0();

    if (isLoading) return <Loader active size='massive'/>;

    return (
        <Container>
            <style>
                {/* Copied from semantic-ui docs */}
                {`
                  html, body {
                    background-color: #384F94 !important;
                    color: white;
                  }
                `}
            </style>
            <MenuBar/>
            <Route path="/" exact component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/battle-pokemons" exact component={PokemonSearch}/>
            <Route path="/battle-pokemons/:pokemonName" component={Pokemon} />
            <ReactQueryDevtools/>
        </Container>
    );
}

export default App;
