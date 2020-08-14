<template>
         <div class=" h-full overflow-x-hidden overflow-y-scroll flex justify-center">
         <div class="container max-w-3xl">
            <table class="table-fixed w-full">
                <thead class="bg-gray-500">
                    <tr>
                        <th class="w-16">Cant</th>
                        <th class="w-auto text-left px-4">Nombre</th>
                        <th class="w-8">Stk</th>
                        <th class="w-12">Gr</th> 
                        <th class="w-12">Tp</th>   
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr>
                        <td class="border text-center"><input class="w-12 h-full text-center focus:outline-none" type="number"></td>
                        <td class="border p-1">Nombre Articulo 1</td>
                        <td class="border text-center">5</td>
                        <td class="border bg-red-300 text-center">AM</td>
                        <td class="border bg-green-300 text-center">P</td>
                    </tr>

                </tbody>
            </table>
         </div>
     </div>
</template>
<script>
export default {
    name:'PxTable',
    assets:{
        type:Array,
        default:()=>[]
    }
}
</script>>