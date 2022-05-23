<script setup>
import Consumer from "./components/Consumer.vue";
import Provider from "./components/Provider.vue";
</script>

<template>
  <Provider>
    <Consumer />
  </Provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
