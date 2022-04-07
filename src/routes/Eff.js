import React, { useEffect, useState } from "react";

/* 
注意: useEffect在没有依赖的情况下是初次渲染，在这个里面请求到数据之后更新了组件的state，导致组件重新渲染(useEffect机制，state更新就会重新渲染)，这样就会形成死循环，不停的更新，不停的请求，不停的渲染，因此就要传递第二个参数，如果第二个参数是一个空输组，意味着组件只在第一次挂在时加载数据，如果参数是data意味着在data更新之后调用effect
*/
export default function Eff() {
  const [data, setData] = useState();
  useEffect(() => {
    console.log("useEffect-[]");
    fetch("https://api.apiopen.top/getJoke")
      .then((res) => res.json())
      .then((r) => setData(r.result));
  }, []);
  useEffect(() => {
    console.log("effect 无依赖");
  });
  useEffect(() => {
    console.log("effect 依赖data");
    console.log(data);
  }, [data]);
  useEffect(() => {
    console.log("effect2 依赖data");
  }, [data]);
  return (
    <div>
      {(() => {
        console.log("render");
        return null;
      })()}
    </div>
  );
}
