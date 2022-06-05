<template>
    <ShareContainer>
        <div class="apartments-list">
            <ApartmentItem
            v-for="{id, price, rating, imgUrl, descr } in items"
            :key="id"
            :id="id"
            :descr="descr"
            :imgUrl="imgUrl"
            :price="price"
            :rating="rating"
            class="apartments-list__item"
            />
        </div>
    </ShareContainer>
</template>

<script>
import ApartmentItem from './apartment/ApartmentItem.vue'
import ShareContainer from './share/Container.vue'
    export default {
        name: 'ApartmentsList',
        components: {
            ApartmentItem,
            ShareContainer
        },
        props: {
            items: {
                type: Array,
                default: ()=> []
                }
        }
    }
</script>

<style lang="scss" scoped>
.apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin-left:-15px;
    margin-right: -15px;

    &__item {
        margin-bottom: 30px;
    }
}

</style>