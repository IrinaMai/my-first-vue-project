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
        data(){

        },
        props: {
            modelValue:{
                type: [String, Number],
                default: "",
            }
        },
        watch: {
            value(){
                this.validate()
            }
        },
        inject: ['form'],
        mounted(){
            if(!this.form) return;
            this.form.registerInput(this)
        },
        beforeUnmount(){
            if(!this.form) return;
            this.form.unregisterInput(this) 
        },
        methods: {
            validate(){
                this.isValid = this.rules.every(rule => {
                    const {hasPassed, message} = rule(this.value);
                    if(!hasPassed){
                        this.error = message || this.errorMessage
                    }
                    return hasPassed
                })
            },
            reset(){
                this.$emit('input', '');
            },
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