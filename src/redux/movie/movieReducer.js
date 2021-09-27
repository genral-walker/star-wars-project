
import movieActionTypes from './movieActionTypes';
import { selectMovie } from './movieUtils';


const INITIAL_STATE = {
    movieSelected: '',
    charactersList: {},

};

const movieReducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case movieActionTypes.MOVIE_SELECTED:
            return {
                ...state,
                movieSelected: selectMovie(payload)
            }
        default:
            return state
    }
};

export default movieReducer;