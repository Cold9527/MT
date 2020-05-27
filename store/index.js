export const actions = {
  async nuxtServerInit({ commit }, { req,app}) {
    const{status, data:{province,city}} = await this.$axios.get('/geo/getPostion')
    commit('geo/setPosition', status===200 ? {city, province} : {city:'', province:''})

    const{data:{menu}} = await this.$axios.get('/geo/menu')
    commit('home/setMenu', status === 200 ? menu : '') 
    const{data:{result}} = await this.$axios.get('/search/hotPlace',{
      params:{
        city:app.store.state.geo.position.city.replace('市','')
      }
    })
    commit('home/setHotplace', status === 200 ? result : '')             
  }
    // nuxtServerInit({ commit }, { req }) {
    //   this.$axios.get('/geo/getPostion').then((res) => {
    //     console.log(res.data)
    //   })
    // },

}
