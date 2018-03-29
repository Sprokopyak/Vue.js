<template>
  <div>
    <h3>User edit page</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confrimed= true">Confirm</button>
    <br>
    <br>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        confrimed: false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confrimed){
        next()
      } else{
        if(confirm('Are you sure')){
          next()
        }else{
          next(false)
        }
      }
      
    }
  }
</script>
