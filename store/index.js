export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    const{status, data:{province,city}} = await this.$axios.get('/geo/getPostion')
    commit('geo/setPosition', status===200 ? {city, province} : {city:'', province:''})
  },  
    // nuxtServerInit({ commit }, { req }) {
    //   this.$axios.get('/geo/getPostion').then((res) => {
    //     console.log(res.data)
    //   })
    // },

}
