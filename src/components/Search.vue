<template>
  <div class="search">
    <b-input-group class="mt-3">
      <b-form-input
        v-model="movie"
        placeholder="Busca una película"
      ></b-form-input>
      <b-input-group-append>
        <b-button @click="search()" variant="dark">Buscar</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: 'Search',

  data() {
    return {
      movie: '',
    }
  },

  methods: {
    search() {
      this.$emit('search', this.movie)
    },
  },
}
</script>

<style lang="scss">
.search {
  display: block;
  margin: 0 auto;
  width: 50%;
}
</style>
