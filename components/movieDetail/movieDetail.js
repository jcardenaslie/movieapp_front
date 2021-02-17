
const modal = document.getElementById("movieDetail")
let modalContent = modal.getElementsByClassName("modal-content")[0];

const openMovieDetail = async (movieTitle) => {

  console.log('====================================');
  console.log("Searching for ", movieTitle);
  console.log('====================================');
  const movie = await getMovieDetailByTitle(movieTitle)

  console.log(movie);

  modalContent.innerHTML = "";
  modalContent.innerHTML += ModalHeader(movie);
  modalContent.innerHTML += ModalBody(movie);
  modalContent.innerHTML += ModalFooter(movie);

}

const ModalHeader = (movie) => {
  return `<div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">${movie.Title}</h4>
          </div>
          `
}

const ModalBody = (movie) => {
  return ` <div class="modal-body">
            <img src="${movie.Poster}">
          </div>`
}

const ModalFooter = (movie) => {

  const dto = {
    id: movie.imdbID,
    title: movie.Title
  }

  return `<div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal" onclick="addMovieToWatchedList('${movie.Title}')" >Watched</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="addMovieToWatchList('${movie.Title}')" >Add</button>
          </div>`
}