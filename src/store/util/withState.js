/**
 * This method assumes each action is a method which:
 * - accepts state as an argument
 * - returns a method which consumes and mutates state
 *
 * example:
 * {
 *    setMsg: (state) => (payload) => state.msg = payload;
 * }; // action
 *
 * @param {object} actions
 * @param {object} state
 * @returns actions with state in context
 */
export const withState = (actions, state) => {
  return Object.keys(actions).reduce(
    (actionsWithState, key) => ({
      ...actionsWithState,
      [key]: actions[key](state),
    }),
    {}
  );
};
