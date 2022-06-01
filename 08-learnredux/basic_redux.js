// 1.导入redux不要使用ES6的方式（与node的版本有关，因为要使用node进行执行）
// 但是可以通过配置脚本的方式使用ES6的导入导出，添加键值对 ：“type”：“module”即可

// redux是一个一个进行导出的，形如{a，b，c}。这里可以直接导出是因为node做了一些处理
import redux from "redux"

// 初始化store的数据
const initState = {
  counter: 0
}
// 编写reducer处理函数
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECRENTMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num };
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
// 创建store
const store = redux.createStore(reducer)
// 订阅store
store.subscribe(() => {
  console.log("counter", store.getState().counter);
})
// 创建action
const action1 = { type: "INCREMENT" }
const action2 = { type: "DECRENTMENT" }
const action3 = { type: "ADD_NUMBER", num: 6 }
const action4 = { type: "SUB_NUMBER", num: 4 }
// 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)