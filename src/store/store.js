import { reactive } from "@vue/reactivity";
import { readonly } from "vue";
import { msgActions, msgState } from "./msg/msg";
import { withState } from "./util/withState";

const cartState = reactive({
  cart: 0,
});

const otherState = {
  count: 0,
};

const state = reactive({
  ...cartState,
  ...otherState,
  ...msgState,
});

const actions = {
  incrementCount(num = 1) {
    state.count += num;
  },
  incrementCart(num = 1) {
    state.cart += num;
  },
  ...withState(msgActions, state),
};

export default readonly({ state, actions });
