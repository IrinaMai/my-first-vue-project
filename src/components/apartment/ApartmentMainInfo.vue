<template>
<section class="apartment">
    <div class="apartment__heading">
    <h1 class="apartment__title">{{apartment.title}}</h1>
    <StarRate :rating="apartment.rating"/>
    </div>
    <img class="apartment__img" :src="apartment.imgUrl" :alt="apartment.title">
    <p class="apartment__description">{{apartment.descr}}</p>
</section>
</template>

<script>
import StarRate from '../StarRate.vue'
    export default {
        name: 'ApartmentMainInfo',
        components: {
            StarRate,
        },
        props: {
            apartment: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartment {
    &__heading{
        display: flex;
        margin-bottom: 20px;
    }
    &__title{
        font-size: 20px;
        font-weight: 700;
        text-transform: capitalize;
        margin-right: 10px;
    }
    &__img{
        max-width: 100%
    }
    &__description {
        line-height:1.3;
        margin-top: 30px;

    }

}
</style>