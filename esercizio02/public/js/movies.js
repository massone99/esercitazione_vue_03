const Movies = {
    data() {
        return {
            movies: []
        }
    },
    methods: {
        list_movies() {
            axios.get("http://127.0.0.1:3000/movies")
                .then(response => {
                    console.log(response.data)
                    const movies = response.data;
                    movies.forEach((movie) => {
                        if (movie.poster != null) {
                            movie.poster = movie.poster.replace("http://ia.media-imdb.com/", "https://m.media-amazon.com/")
                        } else {
                            movie.poster = "https://www.stillisolutions.com/wp-content/uploads/2017/09/no-image-box-300x155.png";
                        }
                    })
                    this.movies = movies;
                })
                .catch(error => {
                })
        },
        replaceByDefault(event) {
            event.target.src = "https://www.stillisolutions.com/wp-content/uploads/2017/09/no-image-box-300x155.png"
        }
    },
    mounted() {
        this.list_movies();

    },
    template: `
          <div class="card" v-for="movie in movies">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img v-if="movie.poster" v-bind:src="movie.poster" class="card-img" alt="" @error="replaceByDefault">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" v-text="movie.title"></h5>
                <p class="card-text" v-text="movie.rated"></p>
                <p class="card-text" v-text="movie.plot"></p>
                <p class="card-text" v-text="movie.released ? movie.released.substring(0,10) : 'N/A'"></p>
              </div>
            </div>
          </div>
          </div>`
}
