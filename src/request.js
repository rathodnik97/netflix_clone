/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
const API_KEY = "7ceb40e84ea50cbd315e451cc284908f";

const request = {

fetchTrending:'/trending/all/day?api_key=${API_KEY}',
fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
fetchTopRated: '/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1',
fetchActionMovies: '/discover/movie?api_key=${API_KEY}&with_genres=28',
fetchComedyMovies: '/discover/movie?api_key=${API_KEY}&with_genres=35',
fetchHorrorMovies: '/discover/movie?api_key=${API_KEY}&with_genres=27',
fetchRomanceMovies: '/discover/movie?api_key=${API_KEY}&with_genres=10749',
fetchDocumentaries: '/discover/movie?api_key=${API_KEY}&with_genres=99',
}