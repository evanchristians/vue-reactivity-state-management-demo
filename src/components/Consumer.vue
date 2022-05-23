<script setup>
import { inject } from "vue";

const { state, actions } = inject("store");
</script>

<template>
  <input
    @input="(evt) => actions.setMsg(evt.target.value)"
    :value="state.msg"
  />
  <h3>{{ state.msg }}</h3>
  <h1>{{ state.count }}</h1>

  <button @click.prevent="state.count += 1">
    plus one (dangerous)
  </button>
  <button @click.prevent="actions.incrementCount(2)">
    plus two
  </button>

  <pre>{{ JSON.stringify(state.cart) }}</pre>

  <button @click.prevent="actions.incrementCart(1)">
    add
  </button>
</template>
