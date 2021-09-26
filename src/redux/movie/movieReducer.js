
import movieActionTypes from './movieActionTypes';
import { } from './movieUtils';


const INITIAL_STATE = {
    movieSelected: ''
};

const movieReducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case movieActionTypes.MOVIE_ADDED:
            return {
                ...state,
                movieSelected: selectMovie()
            }
        default:
            return state
    }
};

export default movieReducer;