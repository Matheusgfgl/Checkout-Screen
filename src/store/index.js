import Vue from 'vue';
import Vuex from 'vuex';

import products from '@/api/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: null,
  },

  getters: {
    getProducts: (state) => state.products,
  },

  actions: {
    async fetchProducs({ commit }){
      try {
        const response = await products.fetchProducts();

        commit('SET_PRODUCTS', response.data.products);

        return Promise.resolve(response.data.products);

      } catch (error) {
        commit('SET_PRODUCTS', null);

        return Promise.reject(error);
      }
    }
  },

  mutations: {
    SET_PRODUCTS(state, payload){
      state.products = payload;
    }
  },
  modules: {
  },
});
