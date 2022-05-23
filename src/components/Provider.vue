<script setup>
import { provide } from "@vue/runtime-dom";
import store from "../store/store";

provide("store", store);
</script>

<template>
  <slot></slot>
</template>
