<template>
  <div class="movie">
    <Slider :title="movie.Title" />
    <div class="movie-info my-5">
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="movie-poster">
              <img :src="movie.Poster" alt="" />
            </div>
          </b-col>
          <b-col md="6">
            <div class="info">
              <p>
                <b>Titulo:</b>
                {{ movie.Title }}
              </p>
              <p>
                {{ movie.Plot }}
              </p>
              <p>
                <b>Awards:</b>
                {{ movie.Awards }}
              </p>
              <p>
                <b>Duración:</b>
                {{ movie.Runtime }}
              </p>
              <p>
                <b>Año:</b>
                {{ movie.Year }}
              </p>
              <p>
                <b>Genero:</b>
                {{ movie.Genre }}
              </p>
              <p>
                <b>Lenguaje:</b>
                {{ movie.Language }}
              </p>
              <p>
                <b>País:</b>
                {{ movie.Country }}
              </p>
              <p>
                <b>Director:</b>
                {{ movie.Director }}
              </p>
              <p>
                <b>Actores:</b>
                {{ movie.Actors }}
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import httpClient from '@/api/httpClient'
import Slider from '@/components/Slider'

export default {
  name: 'Movie',

  components: { Slider },

  data() {
    return {
      movie: {},
    }
  },

  created() {
    this.getMovie()
  },

  methods: {
    async getMovie() {
      console.log(this.id)
      const apiKey = process.env.VUE_APP_API_KEY
      await httpClient
        .get(`https://www.omdbapi.com/?apikey=${apiKey}`, {
          params: { i: this.id },
        })
        .then((res) => {
          console.log(res)
          this.movie = res.data
        })
    },
  },

  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>

<style lang="scss">
.movie {
  .movie-info {
    .movie-poster {
      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
