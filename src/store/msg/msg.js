const msgState = {
  msg: "hello world",
};

const msgActions = {
  setMsg: (state) => (payload) => {
    state.msg = payload;
  },
};

export { msgActions, msgState };
