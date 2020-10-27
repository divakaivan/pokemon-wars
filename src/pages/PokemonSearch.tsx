import React from "react";
import {useQuery} from "react-query";
import {gql, request} from "graphql-request";
import {Loader, Card } from "semantic-ui-react";
import PokemonCard from "../components/PokemonCard";

const endpoint: string = "https://graphql-pokemon2.vercel.app";

function usePokemonNames() {
    return useQuery("pokemonNames", async () => {

        let {pokemons: data} = await request(
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
        data = data.filter((pokemon:any)=>pokemon.evolutions === null)
        return data;
    }, {staleTime: 60_000});
}



const PokemonSearch = () => {
    const {data, error, isLoading} = usePokemonNames();
    // const [activeItem, setActiveItem] = useState('all')

    if (isLoading) return <Loader active/>;

    if (error) {
        const {message}: any = error;
        return <div>{message}</div>;
    }
    return (
        <>
            <Card.Group centered>
                {data && data.map((pokemon: any) => (
                    <PokemonCard key={pokemon.number} pokemon={pokemon}/>
                ))}
            </Card.Group>
        </>
    );
};

export default PokemonSearch;