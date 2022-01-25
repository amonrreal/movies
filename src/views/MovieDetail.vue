<template>
  <div class="movie-detail">
    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  name: 'MovieDetail',
}
</script>

<style lang="scss"></style>
