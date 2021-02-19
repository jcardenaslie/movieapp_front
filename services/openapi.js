const OMDB_API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=24b0afcf"


const getPage = async(movie, page) => {
  const result = await fetch(`${OMDB_API_URL}&s="${movie}"&page=${page}`)
  const data = await result.json()
  return data.Search
}

const getMovieDetail = async (id) => {
  const result = await fetch(`${OMDB_API_URL}&i="tt0076759"&plot=full`)
  const data = await result.json()
  return data
}

const getMovieDetailByTitle = async (title) => {
  const result = await fetch(`${OMDB_API_URL}&t="${title}"`)
  const data = await result.json()
  return data
}

const getMovies = async (movieNames) => {
  const result = await Promise.all( 
    movieNames.map( async name => {
      return await getMovieDetailByTitle(name)
    })
  )

  return result
}
