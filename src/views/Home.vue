<template>
  <div class="home">
    <Slider title="Busca tu pelicula favorita" />
    <b-container>
      <b-row>
        <b-col md="12">
          <div class="search-section my-5">
            <Search @search="getMovies($event)" />
          </div>
        </b-col>
        <b-col md="12">
          <div class="movies-list my-5">
            <div v-if="movies.length == 0" class="no-data">
              <span>No hay datos</span>
            </div>
            <div v-else>
              <div v-if="loading" class="text-center">
                <b-spinner></b-spinner>
              </div>
              <List v-else :movies="movies" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import httpClient from '@/api/httpClient'
import Slider from '@/components/Slider'
import Search from '@/components/Search'
import List from '@/components/List'

export default {
  name: 'Home',

  components: { Slider, Search, List },

  data() {
    return {
      loading: false,
      movies: [],
    }
  },

  methods: {
    async getMovies(movie) {
      this.loading = true
      const apiKey = process.env.VUE_APP_API_KEY
      await httpClient
        .get(`https://www.omdbapi.com/?apikey=${apiKey}`, {
          params: { s: movie },
        })
        .then((res) => {
          console.log(res)
          this.movies = res.data.Search
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss">
.movies-list {
  .no-data {
    text-align: center;
    span {
      color: #666;
    }
  }
}
</style>
