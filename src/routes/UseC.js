import React, {
  Component,
  useState,
  useEffect,
  memo,
  useCallback,
} from "react";

/* 
useCallback的真正目的在于缓存了每次渲染时inline callback的实例，这样方便配合上子组件的shouldComponentUpdate，或者React.memo，起到了减少不必要的渲染的作用，需要不断提醒注意的是，在大部分callback都是inline callback的未来，React.memo和React.Callback一定得配对使用

useCallback 需要传入两个参数
callback仅仅是个函数，并把要做事情的函数放在callback函数体内执行
deps要做事情的函数需要引入的外部参数或者是依赖参数
返回值:返回一个memorized回调函数，在依赖参数不变的情况下，返回的回调函数是同一个引用地址，每当依赖参数改变就会自动重新返回一个新的memorized函数，(地址发生改变)
使用场景:
*/
/* 
useMemo的参数
callback仅仅是个函数，并把要做事情的函数放在callback函数体内执行
deps要做事情的函数需要引入的外部参数或者是依赖参数
返回一个 memoized 值。在依赖参数不变的的情况返回的是上次第一次计算的值
优化针对于当前组件高开销的计算，具有记忆功能

*/

// 类组件的优化方案
// class UseC extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   handleParent = () => {
//     console.log("clicked ParentComponent");
//     this.setState({ count: this.state.count + 1 });
//   };
//   handleChild = () => {
//     console.log("clicked ChildrenComponent");
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleParent}>ParentComponent </button>
//         <Child1 handleChild={this.handleChild}></Child1>
//       </div>
//     );
//   }
// }
// class Child1 extends React.PureComponent {
//   render() {
//     const { handleChild } = this.props;
//     console.log("ChildrenComponent rending");
//     return <button onClick={handleChild}>ChildrenComponent </button>;
//   }
// }
// 函数组件的优化方案

const UseC = () => {
  const [count, setCount] = useState(10);
  const handleParent = () => {
    setCount((count) => count + 1);
    console.log("parentComponent");
  };

  const handleChildrenCallback = useCallback(() => {
    handleChild();
  }, []);
  const handleChild = () => {
    console.log("ChildComponent");
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleParent}>parentComponent</button>
      <Child1 handleChild={handleChildrenCallback}></Child1>
    </div>
  );
};

const Child1 = memo(({ handleChild }) => {
  return <button onClick={handleChild}>ChildComponent</button>;
});

export default UseC;
