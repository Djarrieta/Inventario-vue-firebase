<template>
    <div class=" h-full overflow-x-hidden overflow-y-scroll flex justify-center">
        <div class="container max-w-3xl">
            <div class="w-full h-12 bg-white border p-1 flex flex-col rounded"
                v-for="i in items"
                :key="i.id">
                    <div class="text-lg text-left cursor-pointer hover:text-blue-700">
                        {{i.nombre}}    
                    </div>
                    <div class="text-sm text-right text-gray-500 flex justify-between">
                        <span>Cod:{{i.cod}}</span>
                        <span>{{i.familia}} - {{i.tipo}} Stk:{{i.almacen}}</span> 
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'PxTable',
    props:{
        items:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>>