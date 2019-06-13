<template>
  <div id="app">
    <post-form></post-form>
    
    <input type="text" v-on:input="postUpdate" v-model="numberPost" placeholder="Сколько нужно постов">
    <div class="post" v-for="post in getPosts" :key="post.id">
      <span>{{ `${post.id}/${postsCount}` }}</span>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PostForm from './components/PostForm'

export default {
  name: 'app',
  components: {
    PostForm
  },
  data() {
    return {
      numberPost: 2
    }
  },
  computed: {
    getPosts() {
      return this.$store.getters.getPosts
    },
    postUpdate() {
      this.fetchPosts(this.numberPost)
    },
    postsCount() {
      return this.$store.getters.postsCount
    }
  },
  // computed: mapGetters(['getPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts(this.numberPost)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 600px;
}

.post {
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px;
}
</style>
