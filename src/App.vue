<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters and mixins</h1>
                <p>{{text | uppercase | to-lowercase}}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add</button>
                <input placeholder="Search" v-model="filterText" type="text">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
                </ul>
                <hr>
                <appList></appList>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {fruitMixin} from './fruitMixit';

    export default {
        data() {
            return {
                text: 'Hello there!',
                // fruits: ['Apple', 'Orange', 'Mango', 'Banana'],
                // filterText: ''
            }
        },
        filters: {
            uppercase(value){
                return value.toUpperCase()
            }
        },
        // computed: {
        //     filteredFruits(){
        //         return this.fruits.filter((elem)=>{
        //             return elem.match(this.filterText);
        //         });
        //     }
        // },
        components: {
            appList: List
        },
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
