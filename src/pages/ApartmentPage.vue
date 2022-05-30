<template>
    <Container>
        <div class="apartment-page">
            <ApartmentMainInfo :apartment="apartment"/>
            <div class="apartment-page__sidebar">
                <ApartmentOwner :owner="apartment.owner"/>
                <ReviewsList :reviews ="reviews"/>
            </div>
        </div>
    </Container>
</template>

<script>
import apartments from '../components/apartment/apartments.js';
import Container from '../components/share/Container';
import ApartmentMainInfo from '../components/apartment/ApartmentMainInfo.vue';
import ApartmentOwner from '../components/apartment/ApartmentOwner.vue';
import ReviewsList from '../components/review/index.vue'
import reviews from '../components/review/review.js'

    export default {
        name: "ApartmentPage",
        components: {
            Container,
            ApartmentMainInfo,
            ApartmentOwner,
            ReviewsList
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
            },
            reviews(){
                return reviews
            }
        },
    }
</script>

<style lang="scss" scoped>
.apartment-page {
    display: flex;
    margin-bottom: 30px;
    &__sidebar{
        min-width:350px;
        margin-left:30px
    }
}


</style>
