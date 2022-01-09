import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: []
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        getPosts({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    commit('SET_POSTS', response.data)
                })
        }
    },
    modules: {}
})