<template>
    <div v-show="isVisible">
        <h1>Hello There</h1> 
        <ul>
            <template v-for="fruit in fruits">
            <li v-if="fruit === 'Apple'" :key="fruit">{{fruit}}</li>
            </template>
        </ul>
        <ul>
            <li v-for="(car, key) in cars" :key="key">{{`${key} - ${car.color}`}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'NewDirective',
        data(){
            return {
                isVisible: true,
                fruits: ['Kiwi', 'Mango', 'Apple', 'Lemon'],
                cars: {
                    audi: {color: 'red'},
                    bmw: { color: 'green'}
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>