const API_KEY: string|undefined = process.env.REACT_APP_TMDB_API_KEY;

const thisYear = new Date().getFullYear();

export default {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMoviesOfLastYear: `/discover/movie?api_key=${API_KEY}&with_genres=99&primary_release_date.gte=${thisYear-1}&primary_release_date.lte=${thisYear-1}&adult=true`,
  fetchMoviesOfThisYear: `/discover/movie?api_key=${API_KEY}&with_genres=99&primary_release_date.gte=${thisYear}&primary_release_date.lte=${thisYear}`,
};
