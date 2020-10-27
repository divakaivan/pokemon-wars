import React from "react";
import {useQuery} from "react-query";
import {gql, request} from "graphql-request";
import {Loader, Button, Grid} from "semantic-ui-react";

const endpoint: string = "https://graphql-pokemon2.vercel.app";

function usePokemons() {
    return useQuery("pokemonsHome", async () => {

        const {pokemons: data} = await request(
            endpoint,
            gql`
                query {
                    pokemons(first: 151) {
                        number
                        name
                        image
                        types
                        evolutions {
                            name
                        }
                    }
                }
            `
        );
        return data;
    }, {staleTime: 60_000});
}

const Home = () => {
    const {data, error, isLoading} = usePokemons();

    if (isLoading) return <Loader active/>;

    if (error) {
        const {message}: any = error;
        return <div>{message}</div>;
    }

    return (
        <>
                <Grid>
                    <Grid.Column textAlign="center">
                        <Button color="red" size="massive">Choose your pokemon</Button>
                    </Grid.Column>
                </Grid>
            {data && data.map((pokemon: any) => <p key={pokemon.number}>{pokemon.name}</p>)}

        </>
    );
};

export default Home;