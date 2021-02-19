myStorage = window.localStorage;

const KEY_WATCHED = "watchedList"
const KEY_WATCH = "watchList"

const addMovieToWatchedList = (title) => {
  let movies = getWatchedMovies()
  if(!movies.includes(title)){
    movies.push(title)
    localStorage.setItem(KEY_WATCHED, JSON.stringify(movies));
  }
  clearSearch()
  displayWatched()
}

const addMovieToWatchList = (title) => {
  let movies = getWatchMovies()
  if(!movies.includes(title)){
    movies.push(title)
    localStorage.setItem(KEY_WATCH, JSON.stringify(movies));
  }
  clearSearch()
  displayWatch()
}

const getWatchMovies = () => {
  const movies = localStorage.getItem(KEY_WATCH)
  return movies ? JSON.parse(movies) : []
}

const getWatchedMovies = () => {
  const movies = localStorage.getItem(KEY_WATCHED)
  return movies ? JSON.parse(movies) : []
}

const removeMovieFromWatchedList = ({id}) => {

}

const removeMovieFromWatchList = ({id}) => {
  
}