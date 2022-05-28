<template>
    <div class="container">
        <slot>Dafault value</slot>
    </div>
</template>

<script>
    export default {
        name: "ShareContainer"
    }
</script>

<style lang="scss" scoped>
.container {
    width: 1100px;
    margin: 0 auto;
}
</style>