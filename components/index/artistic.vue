<template>
    <div class='m-istyle'>
        <dl>
            <dt>有格调</dt>
            <dd @mousemove="over"
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
         list:{
            all: [{
                title:'1'
            }],
            part: [{
                title:'2'
            }],
            spa: [{
                title:'3'
            }],
            movie: [{
                title:'4'
            }],
            travel: [{
                title:'5'
            }]             
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
         this.kind = e.target.getAttribute('kind');
       }
   }

}
</script>

<style lang='scss' scoped>
@import "@/assets/css/index/artistic.scss";
</style>
