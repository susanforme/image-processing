<script setup lang="ts">
import { useTestStore } from './store/test'
const testStore = useTestStore()
</script>

<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <h1>{{ testStore.count }}</h1>
    <button @click="testStore.increment">+</button>
    <router-view />
  </div>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
