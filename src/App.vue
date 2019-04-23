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
              ref="searchText"
                v-model="post"
                :rules="[() => !!post || 'This field is required']"
                label="Post Id"
                mask="##########"
                required
                single-line
                outline
              />           
            </v-flex>
            <v-flex> 
              <v-btn
                id="loadPost"
                large 
                color="primary"
                @click="loadPostBtnClick"
              >
                Load
              </v-btn>
            </v-flex>
          </v-layout>
          <div v-if="loadPost">
            <post            
              :postId="post"
            />
          </div>
          <div v-if="noPostResultText" class="headline">
            {{ noPostResultText }}
          </div>
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
  computed: {
    postIdLength () {
      if (this.post) {
        return this.post.length
      }
      return 0
    }
  },
  data () {
    return {
      post: "",
      noPostResultText: '',
      formHasErrors: false,
      loadPost: false,
    }
  },
  methods: {
    loadPostBtnClick() {
      if (this.postIdLength > 0) {
        this.loadPost = true
      } else {
        this.loadPost = false
      }
    }
  },
}
</script>
<style>
</style>

