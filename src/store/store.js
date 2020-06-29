import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export let store = new Vuex.Store({
    state: {
        name: 'chcjswo',
        age: 46
    },
    getters: {
        GET_NAME(state) {
            return state.name;
        },
    },
    mutations: {
        ADD_AGE(state) {
            state.age++;
        },
        NAME_CHANGE(state, name) {
            state.name = name;
        },
        ADD_POST(state, data) {
            state.name = data.name;
        }
    },
    actions: {
        showMore(context) {
            axios
                .get('https://yogoho210.github.io/postdata2.json')
                .then(data => {
                    context.commit('ADD_POST', data.data);
                }).catch(error => {
                    console.log(error);
            });
        }
    }
})