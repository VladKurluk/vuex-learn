<template>
  <div id="app">
    <post-form></post-form>
    
    <input type="number" ref="val" @input="updateNumberPosts" :value="numberOfPosts" 
    placeholder="Сколько нужно постов">
    <div class="post" v-for="post in getPosts" :key="post.id">
      <span>{{ `${post.id}/${postsCount}` }}</span>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import PostForm from './components/PostForm'

export default {
  name: 'app',
  components: {
    PostForm
  },
  // computed: mapGetters(['getPosts', 'postsCount']),
  computed: {
    getPosts() {
      return this.$store.getters.getPosts
    },
    postsCount() {
      return this.$store.getters.postsCount
    },
    numberOfPosts() {
      return this.$store.getters.numberOfPosts
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    ...mapMutations(['updateNumberOfPosts']),
    updateNumberPosts () {
      this.updateNumberOfPosts(this.$refs.val.value)
      this.fetchPosts(this.numberOfPosts)
    }
  },
  mounted() {
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts(this.numberOfPosts)
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
