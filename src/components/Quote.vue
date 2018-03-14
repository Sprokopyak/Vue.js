<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="panel panel-default">
          <div class="pannel-body quote">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['quotes']
}
</script>

<style scopped>
    .pannel-body{
        font-family: 'Arizonia', cursive;
        font-size: 34px;
        color: #6e6e6e;
        padding: 10px;
    }

    .quote{
        cursor: pointer;
    }

    .quote:hover{
        background-color: #ffe2e2;
    }
</style>
