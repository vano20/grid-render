<template>
  <v-card :class="emptyTitle" height="100%">
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text v-if="title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    title: String,
  },
  computed: {
    emptyTitle() {
      return !this.title ? 'invisible-card' : ''
    },
  },
}
</script>
<style>
.invisible-card {
  box-shadow: none !important;
}
</style>
