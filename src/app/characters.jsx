import React, { useEffect, useState } from 'react'

export const CHARACTERS = {
    ted: {
        name: 'Ted Lasso'
    },
    rebecca: {
        name: 'Rebecca Welton'
    },
    sam: {
        name: 'Sam Obisanya'
    },
    jamie: {
        name: 'Jamie Tartt'
    },
    roy: {
        name: 'Roy Kent'
    },
    keeley: {
        name: 'Keeley Jones'
    },
    beard: {
        name: 'Coach Beard'
    },
    danny: {
        name: 'Danny Rojas'
    }
}

export function CharacterSelector({ characterId, setCharacterId }) {
    const availableCharacters = Object.keys(CHARACTERS).map((cid) => ({
        id: cid,
        ...(CHARACTERS?.[cid]),
    }))
    const noCharacter = {id: '', name: 'Choose...'}
    const allCharacters = [noCharacter, ...availableCharacters]
    const options = allCharacters.map((character) => (
        <option
            key={character?.id}
            value={character?.id}
            default={character?.id === ''}
        >{character?.name}</option>
    ))

    return (
        <div>
            <select value={characterId} onChange={(e) => setCharacterId(e.target.value)}>
                {options}
            </select>
        </div>
    )
}