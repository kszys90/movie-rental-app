const API_KEY = process.env.REACT_APP_API_KEY || 'df031d61'

export const getMovie = (imdbID) => {
  return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&plot=full&i=${imdbID}`)
    .then((r) => r.json())
}
