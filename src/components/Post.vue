<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div v-if="post">
            <div class="headline">
              {{ post.title }}
            </div>
            <span>{{ post.body }}</span>
          </div>
          <div v-else>
            <h3>Loading...</h3>
          </div>
        </v-card-title>
        <comments v-if="post" :postId="post.id" />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Comments from "./Comments";
import { RepositoryFactory } from "./../repositories/repositoryFactory"
const postRepository = RepositoryFactory.get('posts')

export default {
  components: {
    Comments
  },
  props: ['postId'],
  data() {
    return {
      post: null,
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      try {
        var response = await postRepository.getPost(this.postId)

        if (response.status === 200){
          this.post = response.data
        } else {
          this.post = null
          console.log(response)
        }
      } catch (error) {
        console.log(error)
      }
      
    }
  },
};
</script>

<style>
</style>
