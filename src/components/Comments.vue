<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div class="comments-headline">Comments</div>
        </v-card-title>
        <v-list subheader three-line offset-md3>
          <template v-for="(comment, index) in comments">
            <v-list-tile
              :key="index"
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
import axios from "axios";

export default {
  props: ['postId'],
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    var vm = this;
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          this.postId +
          "/comments"
      )
      .then(function(response) {
        vm.comments = response.data;
      });
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
