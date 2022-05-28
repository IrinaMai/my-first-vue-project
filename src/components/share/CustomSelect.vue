<template>
<select class="custom-select" :value="modelValue" @input="updateSelect">
    <option v-for="item in formattedOption" :key="item.label" :value="item.label">{{item.value}}</option>
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
        methods: {
            updateSelect(event){
                this.$emit("update:modelValue", event.target.value)
            },
        },
        computed: {
            formattedOption(){
                return this.items.map(item => (typeof item === 'object') ? item : {label: item, value: item})

            }
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