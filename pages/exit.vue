<template>
    <div>

    </div>
</template>

<script>
export default {
   name:'blank',
   middleware:async (ctx)=>{
       let {status, data} = await ctx.$axios.get('/users/exit')
       if(status === 200&&data&&data.code === 0){
           window.location.href = '/'
       }
   }

}
</script>

<style>

</style>
