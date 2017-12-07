import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from '../actions/constants'

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                dataFetched: false,
                isFetching: true,
                error: false
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                dataFetched: true,
                isFetching: false,
                error: false
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                data: [],
                dataFetched: false,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
