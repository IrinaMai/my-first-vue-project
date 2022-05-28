<template>
  <div>
    <h1>{{text}}</h1>
    <CustomInput v-model:modelValue="text"/>
    <ApartmentsList :items="apartments"/>
  </div>
</template>

<script>
import ApartmentsList from './components/ApartmentsList.vue';
import apartments from './components/apartment/apartments.js'
import CustomInput from './components/share/CustomInput.vue'

export default {
  name: 'App',
    components: {
    ApartmentsList,
    CustomInput
},
    data(){
      return {
        apartments,
        text: ''
        }
    }

}
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
