<template>
    <form class="form"  @submit.prevent="handleSubmit">
        <CustomSelect 
        :items="cities" 
        class="form__select" 
        v-model="city"
        />
        <CustomInput class="form__input" v-model="price"/>
        <CustomButton type="submit" class="form__button">Hello!!!</CustomButton>
    </form>
</template>

<script>
import CustomButton from './share/CustomButton.vue';
import CustomInput from './share/CustomInput.vue';
import CustomSelect from './share/CustomSelect.vue';

    export default {
        name: 'ApartmentFilterForm',
        components: {
            CustomButton,
            CustomInput,
            CustomSelect,
        },
        data(){
            return {
                price: '',
                city: ''
            }
        },
        computed: {
            cities(){
                return [{value: '', label: 'Choose city', selected: true},'Kyiv', 'Lviv', 'Kharkiv', 'Mariupol', 'Odessa', 'Poltava']
            }
        },
        methods: {
            handleSubmit(){
               return this.$emit('customsubmit', {
                   city: this.city,
                   price: this.price
               })
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.form{
    display: flex;
    // outline: 1px solid tomato;
    padding: 0 5px;
    margin-bottom: 25px;

    &__input{
        margin-left: 30px;
    }
    &__button{
        margin-right: 100px;
        margin-left: auto;
    }


}
</style>