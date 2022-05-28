<template>
<div>
  <ApartmentItem 
  :description="apartment.description"
  :rating="apartment.rating"
  :price="apartment.price"
  :imgSrc="apartment.src"
  
  />
</div>
</template>

<script>
import ApartmentItem from './components/apartment/ApartmentItem.vue';
export default {
  name: 'App',
    components: {
      ApartmentItem
    },
    data(){
      return {
        apartment: {
          id: '1',
          price: 1245,
          rating:3,
          src: '',
          description: 'The IPTC took part in a panel on Diversity and Inclusion at the CEPIC Congress 2022, the picture industry’s ann',

        }
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
