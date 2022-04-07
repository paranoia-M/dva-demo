export default {
  namespace: "dva1",
  state: {
    name: "zzs",
    count: 0,
  },
  reducers: {
    changeName(state, payload) {
      const _state = { ...state };
      console.log(payload);
      _state.name = payload.data.name;
      return _state;
    },
    addNum(state, payload) {
      const _state = { ...state };
      _state.count += payload.num + 1;
      return _state;
    },
  },
};
