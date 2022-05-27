<template>
<div>
<h1>{{title}}</h1>
  <MyButton @click="increment" outlined>Hello!!!!</MyButton>
  <NewDirective></NewDirective>
  <StarRate :rating="3.4"/>
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue';
import NewDirective from './components/NewDirective.vue';
import StarRate from './components/StarRate.vue';

export default {
  name: 'App',
    components: {
    MyButton,
    NewDirective,
    StarRate
  },
  data(){
    return {
      amountOfClicks: 0
    }
  },
  computed: {
    title(){
      return `Amount of clicks: ${this.amountOfClicks}`
    }
  },
  methods: {
    increment(){
      this.amountOfClicks += 1;
    }
  }
}
</script>

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
