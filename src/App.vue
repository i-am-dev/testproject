<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Posts</span>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-card min-height="100%">
        <v-container
          grid-list-lg
        >
          <v-layout>
            <v-flex>
              <v-text-field
                v-model="searchText"
                label="Post Id"
                single-line
                outline
              />           
            </v-flex>
            <v-flex> 
              <v-btn
                large 
                color="primary"
                @click="loadPost"
              >
                Load
              </v-btn>
            </v-flex>
          </v-layout>
          <post
            v-for="(post, index) in posts"
            :key="index"
            :post="post"
          />
        </v-container>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import Post from "./components/Post";

export default {
  name: 'App',
  components: {
    Post,
  },
  data () {
    return {
      searchText: '',
      posts: [],
    }
  },
  mounted () {
    var vm =this;
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        vm.posts=response.data;
      })
  },
  methods: {
    loadPost () {
      var vm =this;
      axios.get("https://jsonplaceholder.typicode.com/posts/" + this.searchText)
      .then(function (response) {
        vm.posts = [];
        vm.posts.push(response.data);
      })
    },
  },
}
</script>
<style>
  .flex-Padding {
    padding-top: 18px !important;
    padding-left: 3px !important;
    padding-right: 3px !important;
    padding-bottom: 3px !important;
  }
  .flex-btn-padding {
    padding-top: 18px !important;
    padding-left: 3px !important;
    padding-right: 3px !important;
    padding-bottom: 3px !important;
  }
</style>

