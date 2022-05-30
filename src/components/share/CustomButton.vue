<template>
    <button 
        class="custom-button" 
        :type="type" 
    >
        {{descButton}}
    </button>
</template>

<script>
    export default {
       name: "CustomButton",
       props: {
           descButton: {
               type: String,
               default: "Confirm"
           },
           type: {
               type: String,
               default: 'button'
           }
       }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables.scss";

.custom-button {
    min-height: 40px;
    border: 2px solid $accent-color;
    background-color: white;
    font-size: 18px;
    outline: none;
    line-height:inherit;
    padding: 8px 15px;
    color: $accent-color;

    &:hover {
        background-color: $accent-color;
        color: white;
    }
}

</style>