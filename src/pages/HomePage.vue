<template>
  <div>
    <Container>
    <ApartmentFilterForm
    @customsubmit="filter"
    />
    <p v-if="!filteredList.length">Nothing match your choise</p>
    <ApartmentsList v-else :items="filteredList"/>
    </Container>
  </div>
</template>

<script>
import ApartmentsList from '../components/ApartmentsList.vue';
import {getApartmentsList} from '../servises/apartmentsServises';
import ApartmentFilterForm from '../components/ApartmentFilterForm.vue';
import Container from '../components/share/Container'

export default {
  name: 'HomePage',
  components: {
    ApartmentsList,
    ApartmentFilterForm,
    Container,
  },
  data(){
    return {
      apartments: [],
      filters: {
        city:'',
        price: '' 
        }
    }
  },
  async created(){
    console.log('created')
    try{
      const {data} = await getApartmentsList()
      this.apartments = data
      // console.log("hello",data)
    }catch(error){
      console.error
    }
  },
  computed: {
    filteredList(){
      return this.filterByCityName(this.filterByPrice(this.apartments))
    }
  },
  methods: {
    filter({city, price}){
      this.filters.city = city,
      this.filters.price = price
    },
    filterByCityName(apartments){
      if(!this.filters.city) return apartments

      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city})
    },
    filterByPrice(apartments){
      if(!this.filters.price) return apartments

      return apartments.filter(({price}) => price >= this.filters.price)
    }
  }

}
</script>

<style>
</style>
