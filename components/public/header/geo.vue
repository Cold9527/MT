<template>
    <div class="m-geo">
       <i class="el-icon-location"></i>{{$store.state.geo.position.city}}
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

}
</script>

<style lang='scss' scoped>

</style>
