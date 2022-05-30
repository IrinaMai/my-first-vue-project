<template>
    <input 
    class="custom-input"
    placeholder="Price from"
    :value="modelValue"
    @input = "$emit('update:modelValue', $event.target.value)"
    />
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
    &::placeholder{
        color: inherit
    }
}
</style>