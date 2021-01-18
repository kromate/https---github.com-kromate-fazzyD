import { createStore } from 'vuex'

export default createStore({
  state: {
    showNotify:false,
    showNotifyText: "Item Successfully Added to Favourite",
    menu:false,
    user: JSON.parse(localStorage.getItem('user')),
    verified:localStorage.getItem("verified"),
    homeCategoryView:'Home'
  },
  mutations: {

    closeShowNotify(state){
        state.showNotify = false
    },
    changeHomeCategoryView(state, payload){
      state.homeCategoryView = payload
    },
    changeMenu(state){
        state.menu = !state.menu      
    },

    loginUser(state, payload){
      state.user = payload
      state.verified = payload.emailVerified

      localStorage.setItem('verified',  payload.emailVerified);
      localStorage.setItem('user', JSON.stringify(payload));
      
    },
      logOut(state){
        state.user = null
        state.verified = null
        localStorage.setItem('verified',  null);
      localStorage.setItem('user', null);
      }
  },
  actions: {
  },
  modules: { 
  }
})
