import { reactive } from "@vue/reactivity";
import { readonly } from "vue";
import { msgActions, msgState } from "./msg/msg";
import { withState } from "./util/withState";


const state = reactive({
  count: 0,
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
