import React, { useState, useRef, useEffect } from "react";
/* 
闭包陷阱
1. 使用useRef将useState里面的值保存起来，使用时用countRef.current
2. 利用useEffect的return特性，他会在每次state改变的时候获取到最新的state并将他返回出去
3. useCallback useMemo 结合使用也可以解决闭包依赖
*/
export default function Closure() {
  const [value, setValue] = useState(0);
  const countRef = useRef(value);

  useEffect(() => {
    countRef.current = value;
  }, [value]);
  const log = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 1000);
  };
  return (
    <div>
      <p>闭包陷阱</p>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>add</button>
      <button onClick={log}>alert</button>
    </div>
  );
}
