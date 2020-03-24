<template>
    <div class='m-hcity'>
        <dl>
            <dt>热门城市</dt>
            <dd v-for='item in list' 
                @click='selectCity'
                :key="item.index">
                {{item.name === '市辖区' ? item.province:item.name}}
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
   name:'',
   data() {
      return {
          list:[]
      }
   },
   mounted(){
       this.$axios.get('/geo/hotCity').then(res => {
           let data = res.data
           this.list = data.hots
       })
   },
   methods:{
       selectCity(e){
           this.$router.push('/')
           this.$store.commit('geo/setPosition',{city:e.target.innerText})
       }
   }
}
</script>

<style lang="scss">
@import '@/assets/css/changecity/hot.scss';
</style>
