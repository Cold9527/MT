<template>
    <div class='m-menu'>
        <dl class='nav' @mouseleave="mouseleave">
            <dt>全部分类</dt>
            <dd v-for="item in menu" 
              :key="item.index"
              @mouseenter="enter">
                <i :class='item.type'/>{{item.name}}<span class='arrow'/>
            </dd>
        </dl>
        <div class='detail' v-if='kind' @mouseenter='sover' @mouseleave='sout'>
            <div v-for='item in curdetail.children' :key="item.index">
                <h4>{{item.title}}</h4>
                <span v-for="v in item.child" :key="v">{{v}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name:'',
   data() {
      return {
        kind:'',
        menu:[{
          type:'food',
          name:'美食',
          children:[{
              title:'美食',
              child:['代金券','甜点饮品','火锅','自助餐']
          }]
        },{
          type:'takeout',
          name:'外卖',
          children:[{
              title:'美食1',
              child:['代金券','甜点饮品','火锅','自助餐']
          }]
        },{
          type:'hotel',
          name:'酒店',
          children:[{
              title:'美食2',
              child:['代金券','甜点饮品','火锅','自助餐']
          }]
        }]
      }
   },
   computed:{
       curdetail(){
         return this.menu.filter((item) =>item.type===this.kind)[0]
       }
   },
   methods:{
       mouseleave(){
           this._timer = setTimeout(()=>{
               this.kind = ''
           },150)
       },
       enter(e){
           this.kind = e.target.querySelector('i').className
       },
       sover(){
         clearTimeout(this._timer)   
       },
       sout(){
           this.kind =''
       }
   }

}
</script>

<style>

</style>
