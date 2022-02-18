import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
color: black;
`

const Details = ({ character }) => {
    return (
        <StyledDetails>
            <p>gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>BirthYear: {character.birth_year}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
        </StyledDetails>
    )
}

export default Details