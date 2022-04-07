import React from "react";
import { useRequest } from "ahooks";
// import { useRequest } from "@umijs/hooks";
/* 
useRequest是一个强大的异步数据管理的hooks，react中网络请求场景使用useRequest就足够了
自动请求/手动请求
防抖
节流
轮询
屏幕聚焦重新请求
错误重试
loading delay
swr(stale-while-revalidate)
缓存

const { data, error, loading,run } = useRequest(getUsername,{manual: true});
第一个参数是一个异步函数，在初次加载时会触发该函数，同时自动管理该异步函数的  loading data error等状态
手动触发:如果设置了 options.manual = true，则 useRequest 不会默认执行，需要通过 run 来触发执行。

请求生命周期
onBefore
onSuccess
onError
onFinally

刷新(重复上一次请求)
useRequest 提供了 refresh 和 refreshAsync 方法，使我们可以使用上一次的参数，重新发起请求
在事件函数里面直接使用refresh就可以达到刷新效果

立即变更数据
useRequest 提供了 mutate, 支持立即修改 useRequest 返回的 data 参数。

取消请求
useRequest 提供了 cancel 函数，可以取消当前正在进行的请求。同时 useRequest 会在以下时机自动取消当前请求：
组件卸载时，取消正在进行的请求
竞态取消，当上一次请求还没返回时，又发起了下一次请求，则会取消上一次请求

参数管理
useRequest 返回的 params 会记录当次调用 service 的参数数组。比如你触发了 run(1, 2, 3)，则 params 等于 [1, 2, 3] 。
*/

async function getData() {
  await fetch("https://api.apiopen.top/getJoke")
    .then((res) => res.json())
    .then((data) => {
      return data.result;
    });
}
const UseRequest = () => {
  const { data, error, loading, run, refresh } = useRequest(getData, {
    manual: true,
    onBefore: () => {
      console.log("请求之前");
    },
    onSuccess: () => {
      console.log("请求成功");
    },
    onError: () => {
      console.log("请求错误");
    },
    onFinally: () => {
      console.log("请求完成");
    },
  });
  console.log(data);
  return (
    <div>
      aa
      <button onClick={run}>add</button>
      <button onClick={refresh}>refresh</button>
      <div>
        {/* <ul>
          {data.map((item, index) => {
            return <li key={index}>{item.data}</li>;
          })}
        </ul> */}
      </div>
    </div>
  );
};
export default UseRequest;
