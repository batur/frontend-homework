import axios from 'axios'
import * as types from './types'

export const getData = () => async (dispatch) => {
  dispatch({ type: types.FETCH_BEGIN })
  await axios
    .get('http://localhost:3004/items')
    .then((response) => dispatch({ type: types.FETCH_SUCCESS, payload: response.data }))
    .catch((error) => dispatch({ type: types.FETCH_ERROR, payload: error.message }))
}

export const postData = (payload) => (dispatch) => {
  axios
    .post('http://localhost:3004/items', {
      ...payload,
    })
    .then(dispatch({ type: types.POST_ITEM }), getData(), (response) => console.log(response))
    .catch((error) => console.log(error))
}
