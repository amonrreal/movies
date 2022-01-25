<template>
  <div class="list">
    <div v-for="(movie, index) in movies" :key="index" class="movie">
      <div class="poster">
        <router-link
          :to="{
            name: 'Movie',
            params: { id: movie.imdbID },
          }"
        >
          <img :src="movie.Poster" :alt="movie.Title" />
        </router-link>
      </div>
      <div class="title">
        <h4>
          {{ movie.Title }}
          <span>({{ movie.Year }})</span>
        </h4>
      </div>
      <div class="action">
        <b-button
          variant="outline-dark"
          :to="{
            name: 'Movie',
            params: { id: movie.imdbID },
          }"
        >
          Ver detalles
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',

  props: {
    movies: { type: Array },
  },
}
</script>

<style lang="scss">
.list {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  .movie {
    margin: 0 15px 40px;
    width: 25%;
    .poster {
      img {
        width: 100%;
      }
    }
    .title {
      padding: 10px;
      span {
        font-size: 20px;
        font-weight: lighter;
      }
    }
    .action {
      text-align: center;
    }
  }
}
</style>
