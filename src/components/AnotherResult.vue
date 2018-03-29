<template>
  <div>
    <p>Counter is: {{counter}}</p>
  </div>
</template>

<script>
  export default {
    computed:{
      counter(){
        return this.$store.state.counter *2;
      }
    }
  }
</script>
