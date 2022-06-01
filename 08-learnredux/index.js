import store from "./store/index.js"
import { add_number, sub_number } from "./store/actionCreator.js"

store.subscribe(() => {
  console.log(store.getState().counter);
})

store.dispatch(add_number(4))
store.dispatch(sub_number(8))