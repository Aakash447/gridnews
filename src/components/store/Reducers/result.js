import { FETCH_RESULT_REQUEST,FETCH_RESULT_SUCCESS,FETCH_RESULT_FAILURE } from '../types';

  const initialState = {
    loading: true,
    data: [],
    global:[],
    genderKeys:[],
    gender:{},
    ageKeys:[],
    age:{},
    regionKeys:[],
    region:{},
    error: "",
  };
  
  const ResultReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RESULT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_RESULT_SUCCESS:
        return {
          ...state,
          loading: false,
          global:action.global,
          data:action.payload,
          genderKeys:action.genderKeys,
          gender:action.gender,
          ageKeys:action.ageKeys,
          age:action.age,
          regionKeys:action.regionKeys,
          region:action.region,
        };
      case FETCH_RESULT_FAILURE:
        return {
          ...state,
          loading: false,
          error:action.payload
        };
      default:
        return state;
    }
  };
  
  export default ResultReducer;
  