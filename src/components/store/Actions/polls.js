import { FETCH_POLLS_FAILURE, FETCH_POLLS_REQUEST, FETCH_POLLS_SUCCESS } from '../types';
import axios from 'axios';

const fetchPollsRequest = () => {
  return{
    type:FETCH_POLLS_REQUEST
  }
}

const fetchPollsSuccess = polls => {
  return{
    type:FETCH_POLLS_SUCCESS,
    payload:polls
  }
}

const fetchPollsFailure = error => {
  return{
    type:FETCH_POLLS_FAILURE,
    payload:error
  }
}

const fetchPolls = () => {
  
  return function(dispatch){
    dispatch(fetchPollsRequest())
    axios.get('http://13.235.90.125:2112/api/v1/poll/intern')
    .then(res=>{
      const polls = res.data
      setTimeout(() => {
        dispatch(fetchPollsSuccess(polls))
      }, 500);
      // dispatch(fetchUsersSuccess(users))
    }).catch(err=>{
      const error = err.message
      dispatch(fetchPollsFailure(error))
    })
  }
}

export { fetchPollsRequest,fetchPollsSuccess ,fetchPollsFailure ,fetchPolls };
