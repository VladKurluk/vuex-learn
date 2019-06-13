<template>
  <div id="app">
    <div class="post" v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: []
    }
  },
  name: 'app',
  async mounted() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const posts = await response.json()
    this.posts = posts
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
