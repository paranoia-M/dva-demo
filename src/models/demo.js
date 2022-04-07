export default {
  namespace: "demo",
  state: {
    name: "zzs",
    cnodeData: {},
  },
  reducers: {
    setName(state, payload) {
      console.log("run");
      console.log(payload.data.name);
      let _state = JSON.parse(JSON.stringify(state));
      _state.name = payload.data.name;
      return _state;
    },
    setGetFetch(state, payload) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.cnodeData = payload.data;
      return _state;
    },
    changeName(state, payload) {
      return state;
    },
  },
  // 异步actions
  // put 传一个action,用来修改reducers里面的方法
  // call发送接口
  effects: {
    *setNameAsync({ payload }, { put, call }) {
      yield put({
        type: "setName",
        data: {
          name: "ssss",
        },
      });
      yield console.log("async run");
    },
    *getFetch({ payload }, { put, call }) {
      let rel = yield call(
        fetch("https://api.apiopen.top/getJoke")
          .then((response) => response.json())
          .then((data) => console.log(data))
      );
      if (rel.data) {
        yield put({
          type: "setGetFetch",
          data: rel.data,
        });
      }
    },
  },
  //订阅
  // dispatch
  // history
  subscriptions: {
    func({ dispatch, history }) {
      history.listen((pathname) => {
        if (pathname == "/user") {
          console.log("用户页");
          // 可以在这里更改title之类的东西
          dispatch({
            type: "changeName",
          });
        }
      });
    },
  },
};
