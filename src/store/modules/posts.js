export default {
    state: {
        posts: []
    },
    getters: {
        getPosts(state) {
            return state.posts
        },
        postsCount(state) {
            return state.posts.length
        }
    },
    actions: {
        async fetchPosts(ctx, limit=6) {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
            )
            const posts = await response.json()


            ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, payload) {
            state.posts = payload
        }
    }
}