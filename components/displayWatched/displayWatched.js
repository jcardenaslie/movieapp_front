

const NO_DATA_WACTHED_ELEMENT = `<div id="display-container" class="center-center">
                          <h4>Add a movie you have seen already</h4>
                        </div>`

const displayWatched = async () => {
  
  initWatchedDisplay()

  let movies = getWatchedMovies()
  
  if (!movies || !movies.length) {
    display.innerHTML = NO_DATA_WACTHED_ELEMENT 
    return
  } 

  movies = await getMovies(movies)  
  movies = movies.map(WatchMovie)
  const displayContainer = `<div id="display-container" class="cenger-center">
                              ${movies.join()}
                            </div>`

  display.innerHTML = displayContainer
  
}

const initWatchedDisplay = () => {
  clearSearch()
  screenTitle.innerHTML = "Watched"
  input.onkeyup = searchMovies
  input.placeholder = "Search for movies..."
}

const WatchedMovie = (movie) => {
  return `<div class="movie-watch"> 
            <img src="https://via.placeholder.com/70" alt="">
            <div class="movie-watch-info">
              <div>
                <h5>${movie.Title}</h5>
              </div>
              <div>
                tags
              </div>
            </div>
            <div class="movie-watch-controller">
              <div>
                subir
              </div>
              <div>
                bajar
              </div>
            </div>
          </div>`
}