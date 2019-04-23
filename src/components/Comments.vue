<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div class="comments-headline">Comments({{commentsCount}})</div>
        </v-card-title>
        <v-list subheader three-line offset-md3>
          <template v-for="comment in comments">
            <v-list-tile
              :key="comment.id"
            >
              <v-list-tile-content>
                <v-list-tile-sub-title 
                  class="comments-user-email"
                >
                  {{comment.email}}
                </v-list-tile-sub-title>
                <v-list-tile-title v-html="comment.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="comment.body"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script>
import { RepositoryFactory } from "./../repositories/repositoryFactory"
const postRepository = RepositoryFactory.get('posts')

export default {
  computed: {
    commentsCount: function () {
      return this.comments.length;
    }
  },
  props: ['postId'],
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch () {
      try {
        var response = await postRepository.getComments(this.postId)

        if (response.status === 200){
          this.comments = response.data
        } else {
          this.comments = []
          console.log(response)
        }
      } catch (error) {
        console.log(error)
      }
      
    }
  }
};
</script>

<style>
.comments-user-email{
  text-decoration: underline;
}
.comments-headline {
    font-size: 18px !important;
    font-weight: 400;
    line-height: 32px !important;
    letter-spacing: normal !important;
    font-family: 'Roboto', sans-serif !important;
}
</style>
