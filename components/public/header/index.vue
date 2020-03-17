<template>
    <div class="m-header">
        <el-row>
            <el-col><top-bar></top-bar></el-col>
        </el-row>
        <el-row>
            <el-col><search-bar></search-bar></el-col>
        </el-row>        
    </div>
</template>

<script>
import TopBar from './topbar.vue'
import SearchBar from './searchbar.vue'
export default {
   name:'',
   data() {
      return {
      }
   },
   components:{
      TopBar,
      SearchBar
   }

}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
</style>
