
import movieActionTypes from './movieActionTypes'

export const selectMovie = movie => ({
    type: movieActionTypes.MOVIE_SELECTED,
    payload: movie
});

export const saveFetchedMovie = movie => ({
    type: movieActionTypes.MOVIE_FETCHED,
    payload: movie
})