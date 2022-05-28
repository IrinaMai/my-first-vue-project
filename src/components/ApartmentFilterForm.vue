<template>
<form class="form">
<CustomSelect/>
<CustomInput/>
<CustomButton :type="submit"/>
</form>
</template>

<script>
import CustomButton from './share/CustomButton.vue';
import CustomInput from './share/CustomInput.vue';
import CustomSelect from './share/CustomSelect.vue';

    export default {
        name: 'ApartmentFilterForm'
        
    }
</script>

<style lang="scss" scoped>
.form{
    display: flex;
    outline: 1px solid tomato;
}
</style>