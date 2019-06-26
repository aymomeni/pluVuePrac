import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [], // default cart object that has a value (important)
        parts: null,
    },
    mutations: { // all changes must go through a mutation
        addRobotToCart(state, robot){
            state.cart.push(robot);
        },
        updatParts(state, parts) {
            state.parts = parts;
        },
    },
    actions:{
        getParts({commit}){
            axios.get('/api/parts')
            .then(result => commit('updateParts', result.data))
            .catch();
        },
    },
    getters: {
        cartSaleItems(state){
            return state.cart.filter(item => item.head.onSale);
        }
    }
});