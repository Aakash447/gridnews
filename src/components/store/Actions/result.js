import { FETCH_RESULT_REQUEST,FETCH_RESULT_SUCCESS,FETCH_RESULT_FAILURE } from '../types';
import axios from 'axios';

const fetchResultRequest = () => {
  return{
    type:FETCH_RESULT_REQUEST
  }
}

const fetchResultSuccess = result => {
  // filter data here

  // #1 global
  let globalLocal = result.payload.global ;
  let globalArray = [];
  for(let key in globalLocal){
    globalArray.push({name:`${key}`,y:globalLocal[key]})
  }

  //genderLocal #2
  let genderLocal = result.payload.gender ;
  let genderLocalKeys = []
  for(let key in genderLocal){
    let da =  genderLocal[key];
    if(typeof da === 'object' && da !== null){
      genderLocalKeys.push(key)
    } 
  }

  // #3 age
  let ageLocal = result.payload.age;
  let ageLocalKeys = []
  for(let key in ageLocal){
    let da = ageLocal[key]
    if(typeof da==='object' && da!==null){
      ageLocalKeys.push(key)
    }
  }

  // #4 age
  let regionLocal = result.payload.region;
  let regionLocalKeys = []
  for(let key in regionLocal){
    let da = regionLocal[key]
    if(typeof da==='object' && da!==null){
      regionLocalKeys.push(key)
    }
  }

  
  return{
    type:FETCH_RESULT_SUCCESS,
    global:globalArray,
    genderKeys:genderLocalKeys,
    gender:genderLocal,
    ageKeys:ageLocalKeys,
    age:ageLocal,
    regionKeys:regionLocalKeys,
    region:regionLocal,
    payload:result
  }
}

const fetchResultFailure = error => {
  return{
    type:FETCH_RESULT_FAILURE,
    payload:error
  }
}

const fetchResult = (id) => {
  
  return function(dispatch){
    dispatch(fetchResultRequest())
    axios.get(`http://13.235.90.125:2112/api/v1/poll/intern/result/${id}`)
    .then(res=>{
      const result = res.data
      setTimeout(() => {
        dispatch(fetchResultSuccess(result))
      }, 0);
      // dispatch(fetchUsersSuccess(users))
    }).catch(err=>{
      const error = err.message
      dispatch(fetchResultFailure(error))
    })
  }
}

export { fetchResultRequest,fetchResultSuccess ,fetchResultFailure ,fetchResult };
