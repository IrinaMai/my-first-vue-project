<template>
    <select 
        class="custom-select" 
        @change = "$emit('update:modelValue', $event.target.value)"
    >
        <option 
        v-for="item in formattedOption" 
        :key="item.value" 
        :value="item.value"
        :selected= "item.selected"
        >
        {{item.label}}
        </option>
    </select>
</template>

<script>
    export default {
        name: "CustomSelect",
        props:{
            items:{
                type: Array,
                defult: []
            },
            modelValue:{
                type: [String, Number],
                default: "",
            }
        },
        computed: {
            formattedOption(){
                return this.items.map(item => (typeof item === 'object') ? item : {label: item, value: item})

            },
        }
        
    }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.custom-select {
    min-height: 40px;
    min-width: 280px;
    background-color: white;
    border: 2px solid $accent-color;
    font-size: 18px;
    outline: none;
    line-height:inherit;
    padding: 8px 15px;
}
</style>