<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->

    <HeaderDefault v-if="!$route.meta.hideHeader" />
    <router-view />
  </div>
</template>
<script>
import HeaderDefault from '@/components/default/HeaderDefault.vue'
export default {
  name: 'interview_note_pc',
  components: {
    HeaderDefault,
  },
  data: () => {
    return {
      process: process.env.NODE_ENV,
      test: 'te',
    }
  },
}
</script>
<style lang="scss">
@import 'assets/scss/index.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  // background: $bg;
  min-height: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
