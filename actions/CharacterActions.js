import { getCharacters, getCharacter, getRandomQuote } from '../API/BreakingBadAPI';

export const CHARACTER_LIST = "CHARACTER_LIST";
export const CHARACTER_DETAIL = "CHARACTER_DETAIL";
export const CHARACTER_CLEAR = "CHARACTER_CLEAR";
export const RANDOM_QUOTE = "RANDOM_QUOTE";
export const ADD_COMMENT = "ADD_COMMENT";

export const characterList = (characters) => ({
  type: CHARACTER_LIST,
  payload: characters,
});

export const characterDetail = (character) => ({
  type: CHARACTER_DETAIL,
  payload: character,
});

export const randomQuote = (quote) => ({
  type: RANDOM_QUOTE,
  payload: quote,
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const clearCharacter = () => ({
  type: CHARACTER_CLEAR,
  payload: {},
});

export const charactersFetchData = (pageSize, page) => {
  return (dispatch) => {
    getCharacters(pageSize, page).then((response) => {
      dispatch(characterList(response))
    })
  };
}

export const randomQuoteFetchData = () => {
  return (dispatch) => {
    getRandomQuote().then((response) => {
      dispatch(randomQuote(response[0]))
    })
  };
}

export const characterDetailFetchData = (idCharacter) => {
  return (dispatch) => {
    getCharacter(idCharacter).then((response) => {
      dispatch(characterDetail(response[0]))
    })
  };
}

export const clearCharacterFetchData = (idCharacter) => {
  return (dispatch) => {
    dispatch(clearCharacter())
  };
}

export const addCommentData = (comment) => {
  return (dispatch) => {
    dispatch(addComment(comment))
  };
}
