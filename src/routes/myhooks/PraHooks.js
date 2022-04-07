import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useReducer,
} from "react";
import style from "./index.css";
import { Card, Button, message } from "antd";
import useSyncCallback from "../../utils/useSyncCallback";

function PraHooks() {
  return (
    <div>
      <h1>父组件</h1>
      <ComA></ComA>
      <ComB></ComB>
      <ComC></ComC>
      <ComD></ComD>
    </div>
  );
}

// useState 的用法
const ComA = () => {
  // 因为react改变状态是异步的，出于减少render的次数，react会收集所有的状态变更，然后比对优化，最后才更新
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello");
  const countRef = useRef(count);

  const addCount = () => {
    setCount(count + 1);
    func();
  };

  const addCountTwo = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  const changeMsg = () => {
    setMessage("Nice");
  };

  // 自定义hooks来获取最新的state值
  const func = useSyncCallback(() => {
    console.log(count);
  });

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <Card>
      <p>组件ComA</p>
      <div>
        <div>{count}</div>
        <div>{message}</div>
        <Button onClick={addCount}>addCount</Button>
        <Button onClick={addCountTwo}>addCountTwo</Button>
        <Button onClick={changeMsg}>changeMsg</Button>
      </div>
    </Card>
  );
};

/* 
useEffect的用法
useEffect类似于生命周期
useEffect分为两种，清除和不清除(清楚意味着在类组件里面的componentWillUnmount卸载组件)
*/
const ComB = () => {
  const [name, setName] = useState([{ title: "朱文" }]);
  const [num, setNum] = useState(0);

  const showName = () => {
    // setName([...name, { title: "张志" }]); // 添加条目
    setName([{ title: "张文" }]); //更改单条数据
  };

  const addNum = () => {
    setNum((prevNum) => {
      return prevNum + 1;
    });
  };

  useEffect(() => {
    const URL = "https://api.apiopen.top/getJoke";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log("首次渲染,也可以在这里发送请求");
  });
  useEffect(() => {
    console.log(num);
    document.title = `this is ${num}`;
  }, [num]);
  return (
    <Card>
      <p>组件ComB</p>
      {name.map((item) => {
        return <p>{item.title}</p>;
      })}
      <p>{num}</p>
      <Button onClick={showName}>showName</Button>
      <Button onClick={addNum}>addNum</Button>
    </Card>
  );
};

// useContext
const ComC = () => {
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };
  const ColorTheme = React.createContext();
  const ComCChild1 = () => {
    const theme = useContext(ColorTheme); // 接收创建的context
    return (
      <div>
        <p style={{ background: theme.background, color: theme.foreground }}>
          子组件1
        </p>
      </div>
    );
  };
  const ComCChild2 = () => {
    return (
      <div>
        <p>子组件2</p>
      </div>
    );
  };
  return (
    <ColorTheme.Provider value={themes.dark}>
      <Card>
        <p>组件ComC</p>
        <ComCChild1></ComCChild1>
        <ComCChild2></ComCChild2>
      </Card>
    </ColorTheme.Provider>
  );
};

// useReducer
const ComD = () => {
  const init = (initialCount) => {
    return { count: initialCount };
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return init(action.payload);
      default:
        throw new Error();
    }
  };
  const ComDChild1 = (initialCount) => {
    const [state, dispatch] = useReducer(reducer, (initialCount = 0), init);

    const addBtn = () => {
      dispatch({ type: "increment" });
    };

    const redBtn = () => {
      dispatch({ type: "decrement" });
    };

    const reset = () => {
      dispatch({ type: "reset", payload: 0 });
    };
    return (
      <div>
        <p>ComDChild1 {state.count}</p>
        <Button onClick={reset}>reset</Button>
        <Button onClick={addBtn}>addBtn</Button>
        <Button onClick={redBtn}>redBtn</Button>
      </div>
    );
  };
  return (
    <Card>
      <p>组件ComD</p>
      <ComDChild1></ComDChild1>
    </Card>
  );
};
export default PraHooks;
