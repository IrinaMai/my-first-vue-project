<template>
    <div class="apartment-item">
        <router-link 
            :to="{name:'apartment', params:{id}}"
            >
        <div class="apartment-item__inner">
            <img :src="imgSrc" alt="" class="apartment-item__photo">
            <div class="apartment-item__content">
                <p class="apartment-item__description">
                    {{description}}
                </p>
            <div class="apartment-item__rating">
                <StarRate :rating="rating"/>
            </div>
            <div class="apartment-item__price">UAH {{ price }}</div>
            </div>

        </div>
        </router-link>
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
            id: {
                type: String,
                required: true
            },
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
    // position: relative;
    max-width: 350px;
    padding: 0 20px;

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
        line-height: 1.4;

        &:hover {
            opacity: 1;
        }
    }
    &__description {
        margin-bottom: 20px;
        max-height: calc(1em*1.4*3);
        overflow: hidden;
    }

    &__rating {
        margin-bottom: 20px;
    }

    &__price {
        font-size: 20px;
        font-weight: 600;
    }
    &__photo {
        position: absolute;
        top: 0;
        left: 0;
        widows: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>