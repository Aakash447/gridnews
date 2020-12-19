import {
  FETCH_POLLS_REQUEST,
  FETCH_POLLS_SUCCESS,
  FETCH_POLLS_FAILURE,
} from "../types";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const PollsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POLLS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POLLS_SUCCESS:
      return {
        ...state,
        loading: false,
        data:action.payload
      };
    case FETCH_POLLS_FAILURE:
      return {
        ...state,
        loading: false,
        error:action.payload
      };
    default:
      return state;
  }
};

export default PollsReducer;
