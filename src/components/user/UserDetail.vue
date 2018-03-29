<template>
  <div>
    <h3>The user detail page</h3>
    <p>User loaded ID: {{$route.params.id}}</p>
    <!-- <router-link tag="button" :to="'/user/' + $route.params.id + '/edit'" class="btn btn-primary">Edit user</router-link> -->
    <router-link tag="button" :to="{name: 'userEdit', params: {id: $route.params.id }, query: {locale: 'en', q:100}}" class="btn btn-primary">Edit user</router-link>
  </div>
</template>


<script>
  export default {
    beforeRouteEnter(to, from, next){
      if(true){
          next()
      }else{
        next(false)
      }
    }
  }
</script>
