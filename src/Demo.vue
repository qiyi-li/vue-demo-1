<template>
  <div class="color">
    Demo的内部
    {{message}}
    <button @click="fn">call fn</button>
  </div>
</template>

<script>
  export default {
    props:['message','fn']
  }
</script>

<style >
  .color{
    color: cornflowerblue;
    border: 1px solid cadetblue;
  }
</style>

