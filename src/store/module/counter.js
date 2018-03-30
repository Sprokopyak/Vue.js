const state = {
    counter: 0
};

const getters = {
    doubleCounter: state =>{
        return state.counter *2;
    },
    stateCounter: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    increment: (state, payload) =>{
        state.counter += payload;
    },
    decrement: state =>{
        state.counter --;
    }
};

const actions = {
    increment: ({commit}, payload) =>{
        commit('increment', payload);
    },
    decrement: ({commit}) =>{
        commit('decrement');
    },
    asyncIncrement: ({commit}, payload) =>{
        setTimeout(()=>{
            commit('increment', payload.by);
        },payload.duration);
    },
    asyncDecrement: ({commit}) =>{
        setTimeout(()=>{
            commit('decrement');
        },3000);
    },
};
export default {
    state, mutations, actions, getters
}