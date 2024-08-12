//Fetch & REST API
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}${pokemon}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
};

const displayPokemonCard = (pokemon) => {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <p>ID: ${pokemon.id}</p>
        <p>Weight: ${pokemon.weight}</p>
    `;
};

