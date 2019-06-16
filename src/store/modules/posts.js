export default {
    state: {
        posts: [],
        postFetchNumber: 4
    },
    getters: {
        getPosts(state) {
            return state.posts
        },
        postsCount(state) {
            return state.posts.length
        },
        numberOfPosts(state) {
            return state.postFetchNumber
        }
    },
    actions: {
        async fetchPosts(ctx, limit=this.state.postFetchNumber) {
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
        },
        createPost(state, payload) {
            state.posts.push(payload)
        },
        updateNumberOfPosts(state, payload) {
            state.postFetchNumber = payload
        },
    }
}