import axios from 'axios'
import * as types from './types'

export const getData = () => (dispatch) => {
  dispatch({ type: types.FETCH_BEGIN })
  axios
    .get('http://localhost:3004/items')
    .then((response) => dispatch({ type: types.FETCH_SUCCESS, payload: response.data }))
    .catch((error) => dispatch({ type: types.FETCH_ERROR, payload: error.message }))
}

export const postData = (payload) => (dispatch) => {}
