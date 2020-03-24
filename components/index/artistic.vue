<template>
    <div class='m-istyle'>
        <dl>
            <dt>有格调</dt>
            <dd @click="over"
                v-for="item in titles"
                :key='item.index'
                :class="{active : kind===item.type}"
                :kind='item.type'>{{item.name}}</dd>
        </dl>
        <ul class="ibody">
        <li
            v-for="item in cur"
            :key="item.title">
            <el-card
            :body-style="{ padding: '0px' }"
            shadow="never">
            <img
                :src="item.img"
                class="image">
            <ul class="cbody">
                <li class="title">{{ item.title }}</li>
                <li class="pos"><span>{{ item.pos }}</span></li>
                <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
            </ul>
            </el-card>
        </li>
        </ul>        
    </div>
</template>

<script>
export default {
   name:'',
   data() {
      return {
         kind:'all',
         titles:[
            {
              name:'全部',
              type:'all'
            },{
              name:'约会聚餐',
              type:'part'               
            },{
              name:'丽人SPA',
              type:'spa'               
            },{
              name:'电影',
              type:'movie'               
            },{
              name:'品质出游',
              type:'travel'               
            }
         ],
        list: {
          all: [],
          part: [],
          spa: [],
          movie: [],
          travel: []
        }
      }
   },
   computed:{
       cur(){
         return this.list[this.kind]
       }
   },
   methods:{
       over(e){
         let dom = e.target
         this.kind = dom.getAttribute('kind');
         let keyword = this.kind
         this.$axios.get('/search/resultsBykeywords',{
           params:{
             keyword,
             city:this.$store.state.geo.position.city
           }
         }).then((res) =>{
           let data = res.data
           if(data.count > 0){
             let r = data.pois.filter(item=>item.photos.length).map(item=>{
               return {
                 title:item.name,
                 pos:item.type.split(';')[0],
                 price:item.biz_ext.cost || '暂无',
                 img:item.photos[0].url,
                 url:'//abc.com'               
               }
             })
             this.list[this.kind] = r.slice(0,9)
           }else{
             this.list[this.kind] = []
           }
         }) 
       }
   },
   mounted(){
         let keyword = 'all'
         this.$axios.get('/search/resultsBykeywords',{
           params:{
             keyword,
             city:this.$store.state.geo.position.city
           }
         }).then((res) =>{
           let data = res.data
           if(data.count > 0){
             let r = data.pois.filter(item=>item.photos.length).map(item=>{
               return {
                 title:item.name,
                 pos:item.type.split(';')[0],
                 price:item.biz_ext.cost || '暂无',
                 img:item.photos[0].url,
                 url:'//abc.com'               
               }
             })
             this.list[this.kind] = r.slice(0,9)
           }else{
             this.list[this.kind] = []
           }
         }) 
   }

}
</script>

<style lang='scss' scoped>
@import "@/assets/css/index/artistic.scss";
</style>
