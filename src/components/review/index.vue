<template>
    <div class="review">
        <div class="review__heading">
        <StarRate :rating="averageRating" />
        <span class="review__text">Based on {{reviewAmount}} review(s)</span>
        </div>
        <ReviewItem 
        class="review"
        v-for="review in currentReviews" 
        :review="review" 
        :key="review.author" />
        <button class="review__button" @click="hndlReviewsLimit">{{buttonText}}</button>
    </div>
</template>

<script>
import ReviewItem from './ReviewItem.vue';
import StarRate from '../StarRate.vue'
    export default {
        name: 'ReviewsList',
        components: {
          ReviewItem,
          StarRate
        },
        props: {
            reviews: {
                type: Array,
                required: true
            }
        },
        data(){
            return {
                reviewsLimit : 2
            }
        },
        computed:{
            averageRating(){
                const totalRating = this.reviews.reduce((acc, {rating}) => acc += rating, 0)
                return totalRating / this.reviews.length
            },
            reviewAmount(){
                return this.reviews.length
            },
            currentReviews(){
                return this.reviews.slice(0, this.reviewsLimit)
            },
            buttonText(){
                return this.reviewsLimit === this.reviews.length 
                ? 'Shrink'
                : 'Show all'
            }
        },
        methods: {
            hndlReviewsLimit(){
                if(this.reviews.length >= 2){
                return this.reviewsLimit = (this.reviewsLimit ===this.reviews.length) ? 2 : this.reviews.length
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.review{
    margin-top: 20px;
    background-color: #fff;
    padding: 0 2px;

    &__button{
        background-color: #e1efff;
        border: none;
        outline: none;
        font-family: inherit;
        padding: 12px;
        width: 100%;
        cursor: pointer;
        margin-top: 5px;
    }
    &__heading{
        background-color: #e1efff;
        padding: 12px;
        width: 100%;
        margin-top: 5px;
    }
    &__text{
        font-size: small;
        margin-left: 5px;
    }
}
</style>