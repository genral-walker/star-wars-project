
import movieActionTypes from './movieActionTypes'

export const selectMovie = movie => ({
    type: movieActionTypes.MOVIE_SELECTED,
    payload: movie
});