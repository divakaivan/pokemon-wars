import React from "react";
import {useQuery, useQueryCache} from "react-query";
import {gql, request} from "graphql-request";
import {Loader} from "semantic-ui-react";

const endpoint: string = "https://graphql-pokemon2.vercel.app";

function usePokemons() {
    return useQuery("pokemons", async () => {

        const {pokemons: data} = await request(
            endpoint,
            gql`
                query {
                    pokemons(first: 3) {
                        name
                        number
                    }
                }
            `
        );
        return data;
    });
}

const Home = () => {
    const {data, error, isLoading} = usePokemons();

    if (isLoading) return <Loader active/>;

    if (error) {
        const {message}:any = error;
        return <div>{message}</div>;
    }

    return (
        <>
            {data && data.map((pokemon: any) => <p key={pokemon.number}>{pokemon.name}</p>)}
        </>
    );
};

export default Home;