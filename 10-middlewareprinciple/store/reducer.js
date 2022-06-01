import {
  ADD_NUMBER,
  SUB_NUMBER
} from "./constants.js"
import { combineReducers } from "redux"
// const initState = {
//   counter: 7
// }

// export const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case ADD_NUMBER:
//       return { ...state, counter: state.counter + action.num };
//     case SUB_NUMBER:
//       return { ...state, counter: state.counter - action.num };
//     default:
//       return state
//   }
//   // 合并各个部分的reducer
//   return {
//     counterInfo: counterReducer(state, action)
//   }
// }



// 拆分reducer：counter部分
const initCounterState = { counter: 0 }
function counterReducer(state = initCounterState, action) {
  // 编写逻辑即可
}
// other部分
const initOtherState = {}
function otherReducer(state = initOtherState, action) { }

export const reducer = (state = {}, action) => {
  // 合并各个部分的reducer
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    otherInfo: otherReducer(state.otherInfo, action)
  }
}

//! 使用时
state.counterInfo.counter


// ! 使用conbineReducers函数来合并reducer
const reducer = combineReducers({
  counterInfo: counterReducer,
  otherInfo: otherReducer
})
export default reducer