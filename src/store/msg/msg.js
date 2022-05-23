const msgState = {
  msg: "hello world",
};

const msgActions = {
  /**
   * IMPORTANT:
   * actions need to be
   * returned by a function accepting
   * state as its argument
   *
   * this is so these functions can
   * be called to create actions with
   * state in its scope
   *
   * this allows us to spread the result
   * of injecting state into these functions
   * into our globally provided state actions
   *
   * @param {object} state
   * @returns
   */
  setMsg: (state) => (payload) => {
    state.msg = payload;
  },
};

export { msgActions, msgState };
