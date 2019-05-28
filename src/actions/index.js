export const fetchCharacters = (offset, limit) => ({
  type: 'GET_CHARACTERS',
  offset,
  limit
});
export const fetchCharacterById = (id) => ({
  type: 'GET_CHARACTER_BY_ID',
  id
});
export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});