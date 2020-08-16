<template>
  <div id="app">
    <router-view class="bg-gray-200 h-screen w-screen flex flex-col">
      <!-- Todos los componentes se insertan aca -->
    </router-view>  
  </div>
</template>

<script>
  
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
/*     margin-top: 60px; */
  }
  .container{
    min-width: 300px;
  }
</style>
