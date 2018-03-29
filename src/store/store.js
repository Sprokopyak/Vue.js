import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    }, 
    getters:{
        doubleCounter: state =>{
            return state.counter *2;
        },
        stateCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state =>{
            return state.value
        }
    },
    mutations: {
        increment: (state, payload) =>{
            state.counter += payload;
        },
        decrement: state =>{
            state.counter --;
        },
        updateValue: (state, payload) =>{
            state.value = payload
        }
    },
    actions: {
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
        updateValue: ({commit}, payload) =>{
            commit('updateValue', payload);
        }
    }
})