import React, { useState, useContext, memo } from "react";
/* 
  
useContext 跨组件共享数据的钩子函数
useContext组件会在context值变化时重新渲染，所以<MyContext.Provider>包裹的越多，层级越深，性能会造成影响。
<MyContext.Provider> 的 value 发生变化时候， 包裹的组件无论是否订阅content value，所有组件都会从新渲染。
demo中child2 不应该rerender, 如何避免不必要的render？*
使用React.memo优化。因为在初次渲染的时候已经确定了props，所以更改value之后不应该对child2产生影响，使用React,memo（）记忆函数包裹下整体的函数组件就可以不用重新渲染child2而优化性能
--
*/
const MyContext = React.createContext();
function Ctx() {
  const [value, setValue] = useState("init");
  console.log("Ctx-F");
  return (
    <div>
      {(() => {
        console.log("render");
        return null;
      })()}
      <button
        onClick={() => {
          console.log("click: 更新value");
          setValue(`${Date.now()}_newValue`);
        }}
      >
        改变value
      </button>
      <MyContext.Provider value={value}>
        <Child1></Child1>
        <Child2></Child2>
      </MyContext.Provider>
    </div>
  );
}
const Child1 = () => {
  const value = useContext(MyContext);
  console.log("Child1" + value);
  return <div>child1: {value}</div>;
};
const Child2 = React.memo(() => {
  console.log("Childe2");
  return <div>x</div>;
});
// const Child2 = () => {
//   console.log("Childe2");
//   return <div>x</div>;
// };
export default Ctx;
