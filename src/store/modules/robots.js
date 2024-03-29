import axios from 'axios';

export default {
    namespaced: true,
    state: {
        cart: [], // default cart object that has a value (important)
        parts: null,
        foo: 'robots-foo',
    },
    mutations: { // all changes must go through a mutation
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
        updateParts(state, parts) {
            state.parts = parts;
        },
    },
    actions: {
        getParts({ commit }) {
            axios.get('/api/parts')
                .then(result => commit('updateParts', result.data))
                // eslint-disable-next-line
                .catch(console.error);
        },
        addRobotToCart({ commit, state }, robot) {
            const cart = [...state.cart, robot];
            return axios.post('/api/cart', cart)
                .then(() => commit('addRobotToCart', robot));
        },
    },
    getters: {
        cartSaleItems(state) {
            return state.cart.filter(item => item.head.onSale);
        },
        foo(state){
            return `robots-getter/${state.foo}`;
        },
    },
};