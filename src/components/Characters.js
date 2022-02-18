import Character from "./Character"

const Characters = ({ characters }) => {
    return (
        <>
            {characters.map((character, idx) => (<Character key={idx} character={character}  />))}
        </>
    )
}

export default Characters