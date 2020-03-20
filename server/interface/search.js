import Router from 'koa-router'
import axios from './untils/axios'

let router  = new Router({
    prefix:'/search'
})

router.get('/top',async (ctx)=>{
    let {status,data:{top}} = await axios.get('http://cp-tools.cn/search/top',{
        params:{
            input:ctx.query.input,
            city:ctx.query.city
        }
    })
    ctx.body = {
        top:status===200 ? top : ' '
    }
})
router.get('/hotPlace',async (ctx)=>{
    let city = ctx.store ? ctx.store.state.geo.position.city:ctx.query.city
    let {status, data:{result}} = await axios.get('http://cp-tools.cn/search/hotPlace',{
        params:{
            city
        }
    })
    ctx.body = {
        result :status === 200 ? result : []
    }
})

export default router