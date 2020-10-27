import React from "react"
import {Card, Image} from "semantic-ui-react";
import PokemonTypeIcon from "./PokemonTypeIcon";

type PokemonProps = {
    pokemon: {
        number: number,
        image: string,
        name: string,
        types: Array<string>
    }
}

const PokemonCard = ({pokemon}: PokemonProps) => {
    return (
        <Card key={pokemon.number}>
            <Card.Content extra>
                <Image style={{height: 250}} src={pokemon.image} size="medium" />
                <Card.Header>{pokemon.name}</Card.Header>
                <Card.Meta>{pokemon.number}</Card.Meta>
                <Card.Description>
                    {/*TODO: add images for pokemon type*/}
                    <PokemonTypeIcon types={pokemon.types}/>
                </Card.Description>
            </Card.Content>
        </Card>
    )
};

export default PokemonCard;