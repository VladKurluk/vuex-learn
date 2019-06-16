<template>
    <div>
        <h1>Создадим свой пост</h1>
        <form @submit.prevent="submit">
            <input type="text" placeholder="Твой заголовок" v-model="title">
            <input type="text" placeholder="Твой пост" v-model="body">
            <button type="submit">Create Post</button>
        </form>
        <hr />
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    data() {
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        ...mapMutations(['createPost']),
        ...mapGetters(['postsCount']),
        submit () {
            this.createPost({
                title: this.title,
                body: this.body,
                id: this.postsCount() + 1
            })
            this.title = ''
            this.body = ''
        }
    }
}
</script>


<style scoped>
input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>

