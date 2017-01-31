import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    num: 1,
    text: "a"
  },

  mutations: {
    addNum: (state, payload) => state.num = parseInt(payload.num, 10),
    changeText: (state, payload) => { state.text = payload.text },
  },
});

export default store;