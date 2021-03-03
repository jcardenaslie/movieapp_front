
// SEARCH BAR

const movieDetailRef = "movieDetail" // referencia al modal de detalle de la pelicula

const searchIcon = '<i class="fa fa-search"></i>'
const cancelIcon = '<i class="fa fa-times"></i>'

let searchString = ""

input.addEventListener("keypress", (event) => {
  moviesPage = 1
  searchString += event.key
} )

input.addEventListener("keyup", (event) => {

  if (event.key === "Backspace" && searchString.length > 0 ) {
    searchString = searchString.slice(0, -1)
    clearSearch()
  }

})

actionIcon.addEventListener("click", () => {
  clearSearch()
  clearSearchInput()
  actionIcon.innerHTML = searchIcon
})

const populateSearchList = (elements, searchNext) => {
  movieListElement.innerHTML = elements
  movieListElement.appendChild(ViewMoreButton(searchNext))
}

const clearSearch = () => {
  moviesResults = []
  moviesPage = 1
  movieListElement.innerHTML = ""

  friendsResult = []
  friendsPage = 1
  friendsPageLimit = 10

  actionIcon.onclick = searchMovies
  actionIcon.innerHTML = searchIcon
}

const clearSearchInput = () => {
  input.value = ""
  searchString = ""
}

const ViewMoreButton = (searchNext) => {
  let li = document.createElement("LI");
  li.classList.add("viewmore");
  
  li.addEventListener('click', () => {
    searchNext()
  })

  let anchor = document.createElement("A");
  anchor.href= "#"
  anchor.innerHTML = "View Next"

  li.appendChild(anchor)

  return li
}

// MOVIES
let moviesResults = []
let moviesPage = 1
let moviesPageLimit = 5

async function searchMovies() {

  if (searchString.length < 4) {
     return
  }

  if (moviesPage === 1){
    clearSearch()
  }

  console.log('====================================');
  console.log(searchString);
  console.log('====================================');
  
  actionIcon.innerHTML = cancelIcon
  // moviesResults = moviesResults.concat(await getPage("star wars", moviesPage))
  moviesResults = moviesResults.concat(await getPage(searchString, moviesPage))

  if (moviesResults.length === 0) 
    return
  
  let movieElements = ""
  for (i = 0; i < moviesResults.length; i++) {
    let newLi = SearchMovieElement(moviesResults[i])
    movieElements += newLi
  }

  populateSearchList(movieElements, searchNextPage)

}

const searchNextPage = () => {
  searchMovies(moviesPage += 1)
} 

const SearchMovieElement = (movie) => {
  console.log('====================================');
  console.log(movie);
  console.log('====================================');

  if (!movie) {
    return ""
  }

  return `<li>
            <a 
              data-toggle="modal"
              data-target="#${movieDetailRef}" 
              href="#${movieDetailRef}"
              onclick="openMovieDetail('${movie.Title}')"
              >
              ${movie.Title}
            </a>
          </li>`
}

