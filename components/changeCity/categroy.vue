<template>
    <div class=''>
        <dl class='m-categroy'>
            <dt>按拼音首字母选择</dt>
            <dd v-for='item in list' :key="item.index">
                <a :href="'#city-' + item">{{item}}</a>
            </dd>
        </dl> 
        <dl v-for='item in block' :key="item.index" class='m-categroy-section'>
            <dt :id="'city-' + item.title">{{item.title}}</dt>
            <dd>
               <span v-for='c in item.city' :key="c" @click='hangleCity'>{{c}}</span>
            </dd>
        </dl>     
    </div>
</template>

<script>
import pyjs from 'js-pinyin'
export default {
   name:'',
   data() {
      return {
          list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
          block:[]
      }
   },
   methods:{
       hangleCity(e){
           this.$router.push('/')
           this.$store.commit('geo/setPosition',{city:e.target.innerText})
       }
   },
   mounted(){
       this.$axios.get('/geo/city').then(res =>{
           let data = res.data
           let blocks = []
           let p 
           let c 
           let d = {}
           data.city.forEach(item => {
               p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0,1)
               c=p.charCodeAt(0)
               if(c>96 && c<123){
                   if(!d[p]){
                       d[p]= []
                   }
                   d[p].push(item.name)
               }
           })
           for(let [k ,v] of Object.entries(d)){
               blocks.push({
                   title:k.toUpperCase(),
                   city:v
               })
           }
           blocks.sort((a,b) => a.title.charCodeAt(0)-b.title.charCodeAt(0))
           this.block = blocks
       })
   }

}
</script>

<style lang='scss'>
@import '@/assets/css/changecity/categroy.scss';
</style>
