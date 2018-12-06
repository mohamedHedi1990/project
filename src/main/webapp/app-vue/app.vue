<template>
    <div id="project-wrap"> 
        <div>{{message}}</div>  
    </div>
    
</template>
<script>
    import testVue from './testVue.vue';
    

    export default {
        name: 'App',
        components: {
          testVue
        },

        data(){
            return {
                message : "Hello Mr Boussada"
                }
            },
        computed: {
           
            },
        }
    
</script>
<style>

   
</style>


