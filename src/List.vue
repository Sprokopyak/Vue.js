<template>
    <div>
        <h1>Filters and mixins</h1>
        <input v-model="filterText" type="text">
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
import {fruitMixin} from './fruitMixit'
    export default {
        mixins: [fruitMixin],
        created(){
            console.log('List created')
        }
    }
</script>

<style>

</style>
