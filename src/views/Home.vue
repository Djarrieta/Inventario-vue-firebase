<template>
<div>
    <PxHeader/>
    <router-link to='/items'>Items</router-link>
    <router-link to='/about'>about</router-link>
</div>

</template>
<script>
  import PxHeader from '@/components/PxHeader';
    export default {
        name:"Home",
        components:{
            PxHeader,
        }
    }
</script>
