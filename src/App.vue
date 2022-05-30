<template>
  <div class="app__div">
    <AppHeader />
    <router-view class="app__main"></router-view>
    <AppFooter />
  </div>
</template>

<script>

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
  },
}
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &__div {
    display: inline-flex;

    flex-direction: column;
    min-height: 100vh;
  }

  &__main{
    flex-shrink: 1;
  }
}
</style>
