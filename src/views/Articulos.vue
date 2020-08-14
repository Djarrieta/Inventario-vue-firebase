<template>
    <div>
        <PxTable/>
        <PxFooter/>
    </div>
</template>
<script>
  import PxTable from '@/components/PxTable';
  import PxFooter from '@/components/PxFooter'
/*   import firebase from 'firebase' */
    export default {
        name:"Articulos",
        components:{
            PxTable,
            PxFooter
        },
        data(){
            return{
                datos:'',

            }
        }
    }
</script>