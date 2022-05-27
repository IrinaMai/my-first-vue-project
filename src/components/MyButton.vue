<template>
    <button v-on='$attrs' v-bind:type='type' :class="{btn: true,  'btn--outlined': outlined}">
        <slot></slot>
    </button>
</template>

<script>
    export default {
     name: 'MyButton',
     props: {
        type: {
            type: String,
            default: 'button',
        },
        outlined: {
            type: Boolean,
            default: false,
        }
     }  
    }
</script>

<style lang="scss" scoped>
.btn{
    background-color: aqua;
    border: none;
    outline: none;
&--outlined {
    color: aqua;
    background-color: black;
}
}
</style>