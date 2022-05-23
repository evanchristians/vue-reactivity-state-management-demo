<script setup>
import { inject } from "vue";

const { state, actions } = inject("store");
</script>

<template>
  <input
    @input="(evt) => actions.setMsg(evt.target.value)"
    :value="state.msg"
  />

  <h3>input: {{ state.msg }}</h3>
  <h3>count: {{ state.count }}</h3>

  <button @click.prevent="state.count += 1">plus one (dangerous)</button>
  <button @click.prevent="actions.incrementCount(2)">plus two</button>
</template>
