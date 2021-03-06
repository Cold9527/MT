import Router from 'koa-router'
import axios from './untils/axios'
import Province from '../dbs/modles/province'


let router = new Router({
    prefix:'/geo'
})


router.get('/getPostion',async (ctx) =>{
    let {status, data:{province, city}} = await axios.get('http://cp-tools.cn/geo/getPosition')
    if(status===200){
        ctx.body = {
            province,
            city
        }
    }else{
        ctx.body ={
            province:'',
            city:''           
        }
    }
})

router.get('/menu',async(ctx) => {
    let {status, data:{menu}} = await axios.get('http://cp-tools.cn/geo/menu')
    if(status ===200){
        ctx.body = {
            menu
        }
    }else{
        ctx.body = {
            menu:''
        }
    }
})

router.get('/province', async (ctx)=>{
    // let province = await Province.find()
    // ctx.body = {
    //     province:province.map(item => {
    //       return {
    //           id: item.id,
    //           name:item.value[0]
    //       }  
    //     })
    // }
    let {status, data:{province}} = await axios.get('http://cp-tools.cn/geo/province')
    ctx.body = {
        province: status === 200 ? province: []
    }
})
router.get('/province/:id', async (ctx)=>{
    let {status, data:{city}} = await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}`)
    ctx.body = {
        city: status === 200 ? city: []
    }
})
router.get('/city', async (ctx) =>{
    let {status, data:{city}} = await axios.get('http://cp-tools.cn/geo/city')
    ctx.body = {
        city: status === 200 ? city : []
    }
})
router.get('/hotCity', async (ctx) =>{
    let {status, data:{hots}} = await axios.get('http://cp-tools.cn/geo/hotcity')
    ctx.body = {
        hots: status === 200 ? hots : []
    }
})
export default router