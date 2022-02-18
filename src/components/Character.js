// Write your Character component here
import React, { useState } from "react"
import styled from "styled-components"
import Details from "./Details"

const StyledCharacter = styled.div`
color: white;

    &:hover {
        color: red;
    }
`

const Character = ({ character }) => {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <StyledCharacter>
            <h2 onClick={() => setShowDetails(!showDetails)}>{character.name}</h2>
            {showDetails && <Details character={character} />}
        </StyledCharacter>
    )
}

export default Character