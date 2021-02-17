myStorage = window.localStorage;

const cat = localStorage.getItem('myCat');

const watchedList = []
const watchList = []

const addMovieToWatchedList = (title) => {
  watchedList.push(title)
  localStorage.setItem('watchedList', JSON.stringify(watchedList));
}

const addMovieToWatchList = (title) => {
  watchList.push(title)
  localStorage.setItem('watchList', JSON.stringify(watchList));
}

const removeMovieFromWatchedList = ({id}) => {

}

const removeMovieFromWatchList = ({id}) => {
  
}