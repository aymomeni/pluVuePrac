import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [], // default cart object that has a value (important)
    },
    mutations: { // all changes must go through a mutation
        addRobotToCart(state, robot){
            state.cart.push(robot);
        },
    },
    getters: {
        cartSaleItems(state){
            return state.cart.filter(item => item.head.onSale);
        }
    }
});