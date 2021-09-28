
import movieActionTypes from './movieActionTypes';


const INITIAL_STATE = {
    movieSelected: '',
};

const movieReducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case movieActionTypes.MOVIE_SELECTED:
            return {
                ...state,
                movieSelected: payload
            }

        case movieActionTypes.MOVIE_FETCHED:
            return {
                ...state,
                [`${payload.episode_id}`]: payload
            }

        default:
            return state

    }
};

export default movieReducer;