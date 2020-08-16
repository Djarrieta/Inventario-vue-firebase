<template>
    <div>
        <PxHeader/>
        <PxTable :items="items" />
        <PxFooter/>
    </div>
</template>
<script>
    import PxHeader from '@/components/PxHeader';
    import PxTable from '@/components/PxTable';
    import PxFooter from '@/components/PxFooter'


    export default {
        name:"Items",
        components:{
            PxHeader,
            PxTable,
            PxFooter
        },
        data(){
            return{
                items:[
                    {
                        nombre:'Rinconera FM 100x100x600 mm',
                        cod:'1',
                        almacen:5,
                        familia:'Formaleta',
                        tags:['EQUIPO M2', 'FORMALETA METALICA','FORMALETA'],
                        tipo:'Articulo',
                        un:'UN'
                    },
                    {
                        nombre:'Taco metálico 3.20 m',
                        cod:'2',
                        almacen:500,
                        familia:'Losa',
                        tags:['Equipo tradicional', 'Tacos'],
                        tipo:'Articulo',
                        un:'UN'
                    },
                    {
                        nombre:'Tablero tradicional 1.40x0.70 m',
                        cod:'3',
                        almacen:1525,
                        familia:'Losa',
                        tags:['Madera', 'Equipo tradicional'],
                        tipo:'Articulo',
                        un:'UN'
                    },
                    {
                        nombre:'Tablero tradicional 1.40x0.70 m',
                        cod:'4',
                        almacen:1525,
                        familia:'Losa',
                        tags:['Madera', 'Equipo tradicional'],
                        tipo:'Articulo',
                        un:'UN'
                    },
                    {
                        nombre:'Tablero tradicional 1.40x0.70 m',
                        cod:'5',
                        almacen:1525,
                        familia:'Losa',
                        tags:['Madera', 'Equipo tradicional'],
                        tipo:'Articulo',
                        un:'UN'
                    },
                    {
                        nombre:'Tablero tradicional 1.40x0.70 m',
                        cod:'6',
                        almacen:1525,
                        familia:'Losa',
                        tags:['Madera', 'Equipo tradicional'],
                        tipo:'Articulo',
                        un:'UN'
                    },
                    {
                        nombre:'Tablero tradicional 1.40x0.70 m',
                        cod:'7',
                        almacen:1525,
                        familia:'Losa',
                        tags:['Madera', 'Equipo tradicional'],
                        tipo:'Articulo',
                        un:'UN'
                    },
                    {
                        nombre:'Tablero tradicional 1.40x0.70 m',
                        cod:'8',
                        almacen:1525,
                        familia:'Losa',
                        tags:['Madera', 'Equipo tradicional'],
                        tipo:'Articulo',
                        un:'UN'
                    },
                    {
                        nombre:'Tablilla 1.40x0.10 m',
                        cod:'9',
                        almacen:1525,
                        familia:'Losa',
                        tags:['Madera', 'Equipo tradicional'],
                        tipo:'Insumo',
                        un:'UN'
                    },
   
                ]
            }
        },
 
    }
</script>