export const state = () =>({
    menu:'', 
    Hotplace:[]
})
export const mutations = {
    setMenu(state,val){
        state.menu = val
    },
    setHotplace(state,val){
        state.Hotplace = val
    }    
}
export const actions = {
    setMenu({ commit},menu){
      commit('setMenu',menu)
    },
    setHotplace({ commit},Hotplace){
      commit('setHotplace',Hotplace)
    }    
}