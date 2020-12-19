import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from '../types';
import axios from 'axios';

const fetchUsersRequest = () => {
  return{
    type:FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = users => {
  return{
    type:FETCH_USERS_SUCCESS,
    payload:users
  }
}

const fetchUsersFailure = error => {
  return{
    type:FETCH_USERS_FAILURE,
    payload:error
  }
}

const fetchUsers = () => {
  
  return function(dispatch){
    dispatch(fetchUsersRequest())
    axios.get('http://13.235.90.125:2112/api/v1/poll/intern')
    .then(res=>{
      const users = res.data
      dispatch(fetchUsersSuccess(users))
    }).catch(err=>{
      const error = err.message
      dispatch(fetchUsersFailure(error))
    })
  }
}

export { fetchUsersRequest,fetchUsersSuccess ,fetchUsersFailure ,fetchUsers };
