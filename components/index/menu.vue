<template>
    <div class='m-menu'>
        <dl class='nav' @mouseleave="mouseleave">
            <dt>全部分类</dt>
            <dd v-for="item in $store.state.home.menu" 
              :key="item.index"
              @mouseenter="enter">
                <i :class='item.type'/>{{item.name}}<span class='arrow'/>
            </dd>
        </dl>
        <div class='detail' v-if='kind' @mouseenter='sover' @mouseleave='sout'>
            <div v-for='item in curdetail.child' :key="item.index">
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
        menu:[]
      }
   },
   computed:{
       curdetail(){
         return this.$store.state.home.menu.filter((item) =>item.type===this.kind)[0]
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
