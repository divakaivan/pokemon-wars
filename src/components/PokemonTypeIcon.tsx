import React from "react";
import {AiFillBug, AiFillFire} from "react-icons/ai"
import {FaDragon, FaFistRaised, FaGhost, FaMountain, FaRegDotCircle} from "react-icons/fa"
import {
    GiElectric,
    GiFallingRocks,
    GiFeatheredWing,
    GiHighGrass,
    GiPoisonBottle,
    GiPsychicWaves,
    GiFairy
} from "react-icons/gi"
import {WiSnowflakeCold} from "react-icons/wi"
import {IoIosWater} from "react-icons/io"
import {Icon} from "semantic-ui-react"

const pokemonTypes: any = {
    bug: <AiFillBug style={{color: "green"}}/>,
    dragon: <FaDragon style={{color: "blue"}}/>,
    electric: <GiElectric style={{color: "yellow"}}/>,
    fire: <AiFillFire style={{color: "red"}}/>,
    fighting: <FaFistRaised style={{color: "brown"}}/>,
    flying: <GiFeatheredWing style={{color: "lightblue"}}/>,
    fairy: <GiFairy style={{color: "pink"}}/>,
    ghost: <FaGhost style={{color: ""}}/>,
    grass: <GiHighGrass style={{color: "green"}}/>,
    ground: <FaMountain style={{color: "brown"}}/>,
    ice: <WiSnowflakeCold style={{color: "lightblue"}}/>,
    normal: <FaRegDotCircle style={{color: ""}}/>,
    poison: <GiPoisonBottle style={{color: "purple"}}/>,
    psychic: <GiPsychicWaves style={{color: ""}}/>,
    rock: <GiFallingRocks style={{color: ""}}/>,
    water: <IoIosWater style={{color: "blue"}}/>
};

type PokemonTypeIconProps = {
    types: string[]
}

const PokemonTypeIcon = ({types}: PokemonTypeIconProps) => {
    return (<>
        <Icon.Group size="big">
            {types.map((type: string, i: number) => (
                <span key={i}>{pokemonTypes[type.toLowerCase()]}</span>
            ))}
        </Icon.Group>
    </>)
};

export default PokemonTypeIcon;


