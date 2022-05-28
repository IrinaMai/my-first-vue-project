<template>
    <div class="apartment-item">
        <div class="apartment-item__inner">
            <img :src="imgSrc" alt="" class="apartment-item__photo">
            <div class=".apartment-item__content">
                <p class=".apartment-item__description">
                    {{description}}
                </p>
            <div class=".apartment-item__reiting">
                <StarRate :rating="rating"/>
            </div>
            <div class=".apartment-item__price">UAH {{ price }}</div>
            </div>

        </div>
    </div>
</template>

<script>
import StarRate from "../StarRate.vue";

    export default {
        name: 'ApartmentItem',
        components: {
            StarRate
        },
        props: {
        description: {
            type: String,
            default: ''
        },
        rating: {
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        imgSrc: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.apartment-item {
    position: relative;
    max-width: 350px;
    padding: 0 20px;
    background-color: aqua;

    &__inner {
        position: relative;
    }
    &__content {
        position: relative;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.4s;
        background: rgba(#0f1d2d, 0.7);
        min-height: 200px;
        color: #fff;
        text-align: left;
        cursor: pointer;
        z-index:1;
        line-height:1.2;

        &:hover {
            
        }

    }
}

</style>