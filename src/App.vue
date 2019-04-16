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
                v-model="searchText"
                :rules="[() => !!searchText || 'This field is required']"
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
                @click="loadPost"
              >
                Load
              </v-btn>
            </v-flex>
          </v-layout>
          <div v-if="!noPostResultText">
          <post            
            :post="post"
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
  data () {
    return {
      searchText: '',
      post: null,
      noPostResultText: '',
      formHasErrors: false,
    }
  },
  methods: {
    loadPost () {
      var vm =this;
      vm.formHasErrors = false;
      if (!vm.searchText) vm.formHasErrors = true;
     /*  vm.$refs[vm.searchText].validate(true) */
      if(!vm.formHasErrors)
      {
        vm.noPostResultText="Loading...";
        axios.get("https://jsonplaceholder.typicode.com/posts/" + this.searchText)
        .then(function (response) {
          vm.post = response.data;
          vm.noPostResultText='';
        })
        .catch(function (){
          vm.post = null;
          vm.noPostResultText="No post found!";
        })
      } 
    },
  },
}
</script>
<style>
</style>

