<template>
    <div class="m-iselect">
        <span class="name">按省份选择：</span>
        <el-select v-model="pvalue" placeholder="省份">
            <el-option
            v-for="item in province"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
        </el-select>
        <el-select v-model="cvalue" placeholder="城市" :disabled="!city.length"   @change= 'hangleCity'>
            <el-option
            v-for="item in city"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <span class='label'>直接搜索：</span>
        <el-autocomplete
        v-model="input"
        class="input"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入城市中文或拼音"
        @select="handleSelect"

        ></el-autocomplete>                
    </div>
</template>

<script>
import _ from 'lodash'
export default {
   name:'',
   data() {
      return {
          province:[],
          pvalue: '',
          city:[],
          cvalue: '',
          input:'',
          cities:[]
      }
   },
   watch:{
       pvalue(newPvalue){
        this.$axios.get(`/geo/province/${newPvalue}`).then((res) =>{
            let data = res.data
            this.city = data.city.map(item=>{
                return {
                    value: item.id,
                    label: item.name
                }
            })           
            this.cvalue = ''
        })
       }
   },
   mounted(){
      this.$axios.get('/geo/province').then((res)=>{
          let data = res.data
            this.province = data.province.map(item =>{
                return {
                    value: item.id,
                    label: item.name
                }
            })
      })
   },
   methods:{
      querySearchAsync(query,cb){
          if(this.cities.length){
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                cb(this.cities.filter(item => item.value.indexOf(query) > -1))
            }, 3000 * Math.random());
         }else{
            this.$axios.get('/geo/city').then(res => {
                let data = res.data
                this.cities = data.city.map(item => {
                    return {
                        value: item.name
                    }
                })
                cb(this.cities.filter(item => item.value.indexOf(query) > -1))
            }) 
         }
      },
      handleSelect(item){
          this.$router.push('/')
          this.$store.commit('geo/setPosition', {city:item.value})
      },
      hangleCity(item){        
          this.$router.push('/')
          let k = this.city.filter(c=>c.value === this.cvalue).map(item=>{
              return item.label
          })
          this.$store.commit('geo/setPosition', {city:k[0]})
      }
   }

}
</script>

<style lang='scss'>
@import '@/assets/css/changeCity/iselect.scss';
</style>
