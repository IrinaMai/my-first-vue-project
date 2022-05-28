<template>
    <input class="custom-input" :value="modelValue" @input="updateInput">
</template>

<script>
    export default {
        name: "CustomInput",
        props: {
            modelValue:{
                type: [String, Number],
                default: "",
            }
        },
        methods: {
            updateInput(event){
                this.$emit("update:modelValue", event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.custom-input {
    min-height: 40px;
    border: 2px solid $accent-color;
    font-size: 18px;
    outline: none;
    line-height:inherit;
    padding: 8px 15px;
}
</style>