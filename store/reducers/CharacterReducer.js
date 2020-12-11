import { CHARACTER_LIST, CHARACTER_DETAIL, CHARACTER_CLEAR, RANDOM_QUOTE } from "../../actions/CharacterActions"

const initialState = {
  characters: [],
  character: {},
  quote: {}
}

export const characterReducer = (state = initialState, action) => {
  switch(action.type){
    case CHARACTER_LIST: {
      return {...state, characters: [...state.characters, ...action.payload]}
    }
    case CHARACTER_DETAIL: {
      return {...state, character: action.payload}
    }
    case CHARACTER_CLEAR: {
      return {...state, character: action.payload}
    }
    case RANDOM_QUOTE: {
      return {...state, quote: action.payload}
    }
    default:
      return state
  }
}