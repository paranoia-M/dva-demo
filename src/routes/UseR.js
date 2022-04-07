import React, { useReducer } from "react";
/* 使用场景:
state逻辑比较复杂且包含多个子值
下一个state依赖于之前的state
想要稳定的构建自动化测试案例
想深层级的修改子组件状态，使用useReducer还能给那些会触发深更新的组件做性能优化，因为你可以给子组件传递dispatch而不是回调函数，使用reducer有助于将读取写入分开

 */
// useReducer接受一个reducer函数作为参数，reducer接收两个参数state和action，返回一个状态count和dispatch
// const initState = { count: 0 };
// 惰性初始化
function init(initState) {
  return { count: initState };
}
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "reduce":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      break;
  }
};
function UseR({ initState }) {
  const [state, dispatch] = useReducer(reducer, (initState = 100), init);
  return (
    <div>
      <h1>useState</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "add" })}>increment</button>
      <button onClick={() => dispatch({ type: "reduce" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        reset
      </button>
    </div>
  );
}
export default UseR;
