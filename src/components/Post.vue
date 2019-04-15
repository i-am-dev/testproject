<template>
<v-layout>
  <v-flex>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div>
              Post Id: {{ post.id }}
          </div>
          <div
            class="headline"
          >
            {{ post.title }}
          </div>
          <span>
            {{ post.body }}
          </span>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
    props: ['post'],
};
</script>

<style>
</style>
