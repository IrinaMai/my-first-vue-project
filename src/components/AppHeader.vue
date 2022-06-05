<template>
    <header class="header">
        <ShareContainer>
            <router-link to="/">
            <p class="header__logo">LOGO</p>
            </router-link>
        </ShareContainer>
    </header>
</template>

<script>
import ShareContainer from './share/Container.vue'

    export default {
      name: 'AppHeader',
      components:{
          ShareContainer
      } 
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

    .header {
        height: 60px;
        background-color: $main-color;
        margin-bottom:30px;
        // position: absolute;
        // top: 0;
        // left:0;
        &__logo{
            color: $accent-color;
        }
    }
</style>