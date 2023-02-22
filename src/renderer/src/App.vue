<script setup lang="ts"></script>

<template>
  <div>
    <h1>App</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
