<template>
    <div class="apartment-owner">
        <h2 class="apartment-owner__title">OWNER INFO</h2>
        <p class="apartment-owner__info">{{owner.name}}</p>
        <p class="apartment-owner__info">tel: {{owner.phone}}</p>
        <p class="apartment-owner__info">e-mail: {{owner.email}}</p>
    </div>
</template>

<script>
    export default {
        name: "ApartmentOwner",
        props: {
            owner: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartment-owner {
    padding: 20px;
    background-color: #e1efff;
    font-weight: 400;
    &__title{
        font-weight: 600;
        margin-bottom: 10px;
    }
    &__info{
        line-height: 1.4;
    }
}

</style>