export function getCharacters(pageSize, page) {
    let offset = pageSize * page;
    const url = `https://breakingbadapi.com/api/characters?limit=${pageSize}&offset=${offset}`
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getCharacter(id) {
    const url = `https://breakingbadapi.com/api/characters/${id}`
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getRandomQuote() {
    const url = `https://breakingbadapi.com/api/quote/random`
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}