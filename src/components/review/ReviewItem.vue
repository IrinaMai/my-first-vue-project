<template>
    <div class="review-item">
        <ReviewHeading :rating="review.rating" :author="review.author"/>
        <p class="review-item__description">{{review.content}}</p>
    </div>
</template>

<script>
import ReviewHeading from './ReviewHeading.vue'
    export default {
        name: 'ReviewItem',
        components: {
          ReviewHeading  
        },
        props: {
            review: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>