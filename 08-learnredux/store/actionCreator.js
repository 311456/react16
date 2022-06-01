import {
  ADD_NUMBER,
  SUB_NUMBER
} from "./constants.js"

// // 普通写法
// export function add_number(num) {
//   return {
//     type: ADD_NUMBER,
//     num: num
//   }
// }

// export function add_number(num) {
//   return {
//     type: ADD_NUMBER,
//     // es6的增强写法
//     num
//   }
// }
// // 箭头函数写法
// export const add_number = (num) => {
//   return {
//     type: ADD_NUMBER,
//     num: num
//   }
// }
// 将 action 写成函数，灵活性更高。
export const add_number = (num) => ({
  type: ADD_NUMBER,
  num
})
export const sub_number = (num) => ({
  type: SUB_NUMBER,
  num
})