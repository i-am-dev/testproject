<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              {{ post.title }}
            </div>
            <span>{{ post.body }}</span>
          </div>
        </v-card-title>
        <comments :postId="post.id" />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Comments from "./Comments";
export default {
  components: {
    Comments
  },
  props: ['post']
};
</script>

<style>
</style>
