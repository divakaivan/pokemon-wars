import React from "react"
import {Card, Image} from "semantic-ui-react";
import PokemonTypeIcon from "./PokemonTypeIcon";
import {Link} from "react-router-dom";

type PokemonProps = {
    pokemon: {
        number: number,
        image: string,
        name: string,
        types: string[]
    }
}

const PokemonCard = ({pokemon}: PokemonProps) => {
    return (
        <Card key={pokemon.number}>
            <Card.Content extra>
                <Image style={{height: 250}} src={pokemon.image} size="medium" />
                <Card.Header as={Link} to={`/battle-pokemons/${pokemon.name.toLowerCase()}`}>{pokemon.name}</Card.Header>
                <Card.Meta>{pokemon.number}</Card.Meta>
                <Card.Description>
                    <PokemonTypeIcon types={pokemon.types}/>
                </Card.Description>
            </Card.Content>
        </Card>
    )
};

export default PokemonCard;