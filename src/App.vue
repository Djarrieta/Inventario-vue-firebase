<template>
  <div id="app">
    <main class="bg-gray-200 h-screen w-screen flex flex-col">
      <PxHeader/>
      <router-view/>
    </main>
  </div>
</template>

<script>
  import PxHeader from '@/components/PxHeader';
  
  export default {
    name: 'App',
    components: {
      PxHeader
    }
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
