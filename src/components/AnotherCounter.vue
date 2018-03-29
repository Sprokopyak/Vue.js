<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 2000})">Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement">Decrement</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
  export default {
    methods: {
        ...mapActions(['asyncIncrement', 'asyncDecrement']),
        // increment(){
        //     this.$store.dispatch('increment')
        // },
        // decrement(){
        //     this.$store.dispatch('decrement')
        // }
    }
  }
</script>
