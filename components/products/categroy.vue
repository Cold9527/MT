<template>
    <div class='m-product-categroy'>
      <dl class="classic">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd v-for="(item,index) in types" :key="index">
            <iselect :name='item.type' :list='item.module'/>
        </dd>
      </dl>
      <dl class="classic">
        <dt>区域</dt>
        <dt>全部</dt>
        <dd v-for="(item,index) in areas" :key="index">
            <iselect :name='item.type' :list='item.module'/>
        </dd>
      </dl>      
    </div>
</template>

<script>
import iselect from './iselect'
export default {
   name:'',
   props: {
     types:{
       type:Array,
       default:[]
     },
     areas:{
       type:Array,
       default:[]
     }
   },
   data() {
      return {
      }
   },
   components:{
    iselect 
   }

}
</script>

<style>

</style>
