<template>
    <div class="m-geo">
       <i class="el-icon-location" ref='city'>{{this.$store.state.geo.position.city}}</i>
       <nuxt-link class="changeCity" to='/changeCity'>切换城市</nuxt-link>
       [香河 廊坊 天津]
    </div>
</template>

<script>
export default {
   name:'',
   data() {
      return {
      }
   },
   create(){
      
   },
   mounted(){
      this.$bus.$emit('city',this.$refs.city.innerText)
      console.log(this.$refs.city.innerText)
   }

}
</script>

<style lang='scss' scoped>

</style>
