<template>
    <Container>
        <div class="apartment-page">
        <ApartmentMainInfo :apartment="apartment"/>
        <div class="apartment-page__sidebar">
            <ApartmentOwner :owner="apartment.owner"/>
        </div>
        </div>
    </Container>
</template>

<script>
import apartments from '../components/apartment/apartments.js';
import Container from '../components/share/Container';
import ApartmentMainInfo from '../components/apartment/ApartmentMainInfo.vue';
import ApartmentOwner from '../components/apartment/ApartmentOwner.vue';

    export default {
        name: "ApartmentPage",
        components: {
            Container,
            ApartmentMainInfo,
            ApartmentOwner
        },
        mounted(){
            // console.log(this.$router)
            // console.log(this.$route)
            console.log(this.$route.params.id)
            console.log(this.apartment)
        },
        computed: {
            apartment(){
                return apartments.find(({id})=> id === this.$route.params.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartment-page {
    display: flex;
    &__sidebar{
        min-width:350px;
        margin-left:30px
    }
}


</style>
