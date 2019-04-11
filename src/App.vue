<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Posts</span>
      </v-toolbar-title>
      <v-spacer />
      <v-form 
        xs12 
        sm6 
        md3 
      > 
        <v-container>
          <v-layout>
            <v-flex>
              <v-text-field
                v-model="searchText"
                label="Post Id"
                prepend-inner-icon="search"
                class="flex-Padding"
              />           
            </v-flex>
            <v-flex
              class="flex-btn-padding "
            > 
              <v-btn
                small 
                color="primary"
              >
                Load
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-toolbar>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchText: '',
      posts: [],
    }
  },
}
</script>
<style>
  .flex-Padding {
    padding-top: 1px !important;
    padding-left: 3px !important;
    padding-right: 3px !important;
    padding-bottom: 3px !important;
  }
  .flex-btn-padding {
    padding-top: 1px !important;
    padding-left: 3px !important;
    padding-right: 3px !important;
    padding-bottom: 3px !important;
  }
</style>

