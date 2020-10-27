import React from "react";
import {useParams} from "react-router-dom"
import {useQuery} from "react-query";
import {gql, request} from "graphql-request";
import {Loader} from "semantic-ui-react"


const endpoint: string = "https://graphql-pokemon2.vercel.app";

function usePokemon(pokemonName: string) {
    return useQuery(["pokemon", pokemonName], async () => {

        const {pokemon: data} = await request(
            endpoint,
            gql`
                query pokemon($name: String!) {
                    pokemon(name: $name) {
                        name
                        maxHP
                        types
                        resistant
                        weaknesses
                        attacks {
                            fast {
                                name
                                type
                                damage
                            }
                            special {
                                name
                                type
                                damage
                            }
                        }
                    }
                }
            `, {name: pokemonName}
        );
        return data;
    }, {staleTime: 60_000});
}


const Pokemon = () => {
    const {pokemonName}: any = useParams();
    const {data, isLoading} = usePokemon(pokemonName);
    // const {name, maxHP, types, resistant, weaknesses} = data;

    if (isLoading) return <Loader active/>;

    return (
        <>
            <h1>{data.name}</h1>
            <h1>Max HP {data.maxHP}</h1>
            <h1>Types {data.types.map((type: string, i: number) => <li key={i}>{type}</li>)}</h1>
            <h1>Resistances {data.resistant.map((type: string, i: number) => <li key={i}>{type}</li>)}</h1>
            <h1>Weaknesses {data.weaknesses.map((type: string, i: number) => <li key={i}>{type}</li>)}</h1>
        </>

    )
};

export default Pokemon;