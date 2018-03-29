<template>
  <div>
    <!-- <p>Counter is: {{counter}}</p>
    <p>Number of clicks: {{clicks}}</p> -->
      <p>Counter is: {{doubleCounter}}</p>
    <p>Number of clicks: {{stateCounter}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

  export default {
    // computed:{
    //   counter(){
    //     return this.$store.getters.doubleCounter;
    //   },
    //   clicks(){
    //     return this.$store.getters.stateCounter;
    //   }
    // }

    computed: mapGetters([
      'doubleCounter', 'stateCounter'
    ])
  }
</script>
