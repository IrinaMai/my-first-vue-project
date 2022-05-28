<template>
    <ApartmentsList :items="apartments">
    <template v-slot:default>My Default Slot</template>
    <template v-slot:title>New Teatle </template>
    <template v-slot:apartment="{ apartment }">
      <ApartmentItem
        :key="apartment.id"
        :description="apartment.description"
        :imgSrc="apartment.src"
        :price="apartment.price"
        :rating="apartment.rating"
        @click="onApartmentItemClick(2,$event)"
        />
    </template>
    </ApartmentsList>
</template>

<script>
import ApartmentsList from './components/ApartmentsList.vue';
import ApartmentItem from './components/apartment/ApartmentItem.vue';
import apartments from './components/apartment/apartments.js'

export default {
  name: 'App',
    components: {
    ApartmentsList,
    ApartmentItem
},
    data(){
      return {apartments}
    },
    methods: {
      onApartmentItemClick(index, event){
        console.log(index, event)
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
