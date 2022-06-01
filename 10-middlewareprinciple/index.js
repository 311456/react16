import store from "./store/index.js"
import { add_number, sub_number } from "./store/actionCreator.js"

store.subscribe(() => {
  console.log(store.getState().counter);
})
// 基本用法
// store.dispatch(add_number(4))
// store.dispatch(sub_number(8))

// 1.简单实现拦截
// console.log("dispatch-------", add_number(4));
// store.dispatch(add_number(4))
// console.log("new state------", store.getState());

// 2.封装为函数
// function logging(action) {
//   console.log("dispatch-------", action);
//   store.dispatch(action)
//   console.log("new state------", store.getState());
// }
// logging(add_number(4))

// 3.在函数的基础上修改dispatch
// const next = store.dispatch
// function logging(action) {
//   console.log("dispatch-------", action);
//   next(action)
//   console.log("new state------", store.getState());
// }
// store.dispatch = logging
// store.dispatch(add_number(4))

// 4.最终封装，调用一次函数即可，还可以抽取出去
// function logging(store) {
//   const next = store.dispatch
//   function logging(action) {
//     console.log("dispatch-------", action);
//     next(action)
//     console.log("new state-++--", store.getState());
//   }
//   store.dispatch = logging
// }
// logging(store)
// store.dispatch(add_number(4))

// 5.类似thunk功能,既可以传入函数，也可以传入对象
// function thunkLogging(store) {
//   const next = store.dispatch
//   function logging(action) {
//     if (typeof action === 'function') {
//       action(store.dispatch, store.getState)
//     } else {
//       next(action)
//       console.log("jjj");
//     }
//   }
//   store.dispatch = logging
// }
// thunkLogging(store)

// 对象调用
// store.dispatch(add_number(4))
// 函数调用
// function foo(dispatch, getState) {
//   dispatch(add_number(4))
// }
// store.dispatch(foo)

// 6.封装applyMiddleware
function applyMiddleware(...middlewares) {
  middlewares.forEach((middleware) => {
    // 一次派发每个中间件（中间件中发送action）
    middleware(store)
  })
}

applyMiddleware(thunkLogging, logging)
store.dispatch(sub_number(2))
