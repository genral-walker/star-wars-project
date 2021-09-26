
import movieActionTypes from './movieActionTypes'

export const addToCart = movieID => ({
    type: movieActionTypes.MOVIE_ADDED,
    payload: movieID
});