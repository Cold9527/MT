<template>
    <div 
    :id="id"
    :style="{width:width+'px',height:height+'px',margin:'34px auto'}">

    </div>
</template>

<script>
export default {
   name:'',
   props: {
    width: {
      type:Number,
      default:300
    },
    height: {
      type:Number,
      default:300
    },
    point: {
      type:Array,
      default(){
        return [116.46,39.92]
      }
    }
   },
   data() {
      return {
          id:`map`,
          key:'16f86ae7fe6020e1ea53f05be3e68785'
      }
   },
   watch:{
    point: function (val, old) {
      this.map.setCenter(val)
      this.marker.setPosition(val)
    }
   },
   mounted(){
       let self = this
       self.id = `map${Math.random().toString().slice(4,6)}`

        window.onmapLoaded  = function(){
            let map = new AMap.Map(self.id, {
                zoom:11,//级别
                center:self.point,//中心点坐标
                viewMode:'3D'//使用3D视图
            })
            self.map = map
            window.AMap.plugin(["AMap.ToolBar"],function(){
                //加载工具条
                let toolbar = new window.AMap.ToolBar()
                map.addControl(toolbar)
                let marker = new window.AMap.Marker({
                    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
                    position: self.point
                })  
                self.marker = marker 
                marker.setMap(map)          
            })            
        }
        const url = `https://webapi.amap.com/maps?v=1.4.10&key=${self.key}&callback=onmapLoaded`
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
    }

}
</script>

<style>

</style>
