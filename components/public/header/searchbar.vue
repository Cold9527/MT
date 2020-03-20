<template>
    <div class='search-panel'>
        <el-row class='m-header-searchbar'>
            <el-col :span="3" class='left'>
                <img src='https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png' alt=''/>
            </el-col>
            <el-col :span='15' class='center'>
                <div class='wrapper'>
                    <el-input 
                      placeholder='搜索商家和地点' 
                      v-model="search"
                      @focus = 'focus'
                      @blur="blur"
                      @input='input'/>
                    <button class="el-button el-button--primary">    
                        <i class ='el-icon-search' />
                    </button>
                    <dl class="hotPlace" v-if='isHotPlace'>
                        <dt>热门搜索</dt>
                        <dd v-for="item in this.$store.state.home.Hotplace.slice(0,5)" :key="item.index">{{item.name}}</dd>
                    </dl>
                    <dl class="searchList" v-if='isSearchList'>
                        <dd v-for="item in searchList" :key="item.index">{{item.name}}</dd>
                    </dl>                    
                </div>
                <p class='suggest'>
                    <a href='#' v-for="item in this.$store.state.home.Hotplace.slice(5,9)" :key="item.index">{{item.name}}</a>
                </p>
                <ul class='nav'>
                    <li>
                        <nuxt-link to='/' class='takeout'>美团外卖</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to='/' class='movie'>猫眼电影</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to='/' class='hotel'>美团酒店</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to='/' class='apartment'>民宿/公寓</nuxt-link>
                    </li>  
                    <li>
                        <nuxt-link to='/' class='business'>商家入驻</nuxt-link>
                    </li>                                                                                
                </ul>
            </el-col>
            <el-col :span='6' class='right'>
                <ul class='security'>
                     <li><i class="refund" /><p class="txt">随时退</p></li>
                     <li><i class="single" /><p class="txt">不满意免单</p></li>
                     <li><i class="overdue" /><p class="txt">过期退</p></li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
   name:'',
   data() {
      return {
        isFocus: false,
        search:'',
        hotPlace:[],
        searchList:[]
      }
   },
   computed:{
       isHotPlace(){
        return this.isFocus && !this.search
       },
       isSearchList(){
        return this.isFocus && this.search
       }
   },
   methods:{
       focus(){
        this.isFocus = true
       },
       blur(){
         setTimeout(()=>{
            this.isFocus = false 
         },200)         
       },
       input:_.debounce(async function(){
           let city = this.$store.state.geo.position.city.replace('市','')
           this.searchList = []
           let {status, data:{top}} = await this.$axios.get('/search/top',{
               params:{
                   input:this.search,
                   city
               }
           })
           this.searchList = top.slice(0, 10)
       },300)
   }


}
</script>

<style>

</style>
