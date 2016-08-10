import { Schema, arrayOf } from 'normalizr';

const pokemonSchema = new Schema('pokemons', { idAttribute: 'id' });
const typeSchema = new Schema('types', {
    idAttribute: t => t.name,
});

pokemonSchema.define({
    types: arrayOf(typeSchema),
});

export default pokemonSchema;
