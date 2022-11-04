import req from "./request";
const url = "https://api.apiopen.top/getJoke";
// const request = req(url);

export default {
  namespace: "dvaDemo",
  state: {
    name: "zzs",
    num: 0,
    fetchData: [],
  },
  reducers: {
    // setName(state, payload) {
    //   console.log("setName");
    //   console.log(payload.data.name);
    //   // 正常改变state的话不会更新state，先必须解构一份state，然后在给他赋值
    //   // let _State = [...state];
    //   let _state = JSON.parse(JSON.stringify(state));
    //   _state.name = payload.data.name;
    //   return _state;
    //   // return state;
    // },
    setName(state, payload) {
      let newState = { ...state };
      newState.name = payload.data.name;
      console.log(newState);
      return newState;
    },
    addNum(state, payload) {
      let addState = { ...state };
      addState.num += 1;
      console.log("加1");
      return addState;
    },
    RedNum(state, payload) {
      let redState = { ...state };
      redState.num -= 1;
      return redState;
    },
    readState(state, payload) {
      console.log(payload.data);
      let _state = { ...state };
      _state.fetchData = payload.data;
      console.log(_state);
      return _state;
    },
  },
  effects: {
    // put用于触发payload; yield put({ type: 'todos/add', payload: 'Learn Dva'});
    // call 调用异步逻辑，请求数据; const result = yield call(fetch, payload);
    // select 用于从state里面获取数据;const todos = yield select(state => state.todos);
    // *fetchState({ payload }, { put, call }) {
    //   const res = yield req(url).then((data) => {
    //     return data;
    //   });
    //   // console.log(res);
    //   if (!res && res === "undefined") {
    //     console.log("没有获取到数据");
    //     yield put({
    //       type: "readState",
    //       data: res,
    //     });
    //   }
    // },

    *fetchState({ payload }, { put, call }) {
      let res = yield call(req, url);
      if (!res.result && res.result === "undefined") {
        console.log("请求出错");
      } else {
        yield put({
          type: "readState",
          data: res.result,
        });
      }
    },
  },
};

// let a = req(
//   "https://www.fastmock.site/mock/700c3de794c8cdec7b3c3ff37d4d3383/test/people"
// ).then((res) => console.log(res));

// console.log(a);
