import {
  ADD_NUMBER,
  SUB_NUMBER
} from "./constants.js"

const initState = {
  counter: 0
}
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    default:
      return state
  }
}