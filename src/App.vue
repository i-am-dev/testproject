<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Posts</span>
      </v-toolbar-title>
      <v-spacer />
      <v-flex xs12 sm6 md3>
        <v-text-field
          label="Post Id"
          append-icon="search"
        ></v-text-field>
        </v-flex>
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
      //
    }
  }
}
</script>
