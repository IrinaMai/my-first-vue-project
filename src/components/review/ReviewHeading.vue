<template>
    <div class="reviw-item__heading">
        <img class="reviw-item__img" src="#" alt="">
        <h2 class="review-item__name">{{author}}</h2>
        <StarRate :rating="rating" />
    </div>
</template>

<script>
import StarRate from '../StarRate.vue'
    export default {
        name: "ReviewHeading",
        components: {
            StarRate,
        },
        props: {
            rating: {
                type: Number,
                default: 0
            },
            author: {
                type: String,
                required: true
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>