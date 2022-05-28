<template>
  <div>
    <h1>{{text}}</h1>
    <CustomSelect v-model:modelValue="selected" :items="[1,2,3,4]" />
    <CustomInput v-model:modelValue="text"/>
    <ApartmentsList :items="apartments"/>
  </div>
</template>

<script>
import ApartmentsList from './components/ApartmentsList.vue';
import apartments from './components/apartment/apartments.js'
import CustomInput from './components/share/CustomInput.vue'
import CustomSelect from './components/share/CustomSelect.vue';

export default {
  name: 'App',
    components: {
    ApartmentsList,
    CustomInput,
    CustomSelect
},
    data(){
      return {
        apartments,
        text: '',
        selected: ''
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
