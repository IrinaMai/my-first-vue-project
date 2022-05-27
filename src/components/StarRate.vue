<template>
<div class="star-rating">
    <span v-for="index in starLimit" :key="index" class = "star star_outlined"></span>
    <div class="star-rating_colored" :style="ratingWidthStyle">
        <span v-for="item in starLimit" :key="item" class = "star star_colored"></span>
    </div>
</div>
</template>

<script>
    export default { 
        name: 'StarRate',
        props: {
            rating: {
                type: Number,
                default: 0,
            },
            starLimit : {
                type: Number,
                default: 5
            }
        },
        computed: {
            raitingWidth(){
                return this.rating / this.starLimit *100;
            },
            ratingWidthStyle(){
                return `width: ${this.raitingWidth}%;`
            }
        }
    }
</script>

<style lang="scss" scoped>
.star-rating{
    position:relative;
    display: inline-flex;
    &_colored{
        position: absolute;
        display: inline-flex;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden
    }
};
.star{
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 3px;
    flex-shrink: 0;
    &_colored{
        background: url('../images/star-full.svg') center no-repeat;
    }
    &_outlined {
        background: url('../images/star-empty.svg') center no-repeat
    }
};
</style>