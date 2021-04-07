import axios from 'axios'
import * as types from './types'

const APIURL = 'https://raw.githubusercontent.com/cosakin/frontend-homework/main/src/db.json'
export const getData = () => async (dispatch) => {
  dispatch({ type: types.FETCH_BEGIN })
  await axios
    .get(APIURL)
    .then((response) => dispatch({ type: types.FETCH_SUCCESS, payload: response.data.items }))
    .then((response) => console.log(response))
    .catch((error) => dispatch({ type: types.FETCH_ERROR, payload: error.message }))
}

export const postData = (payload) => (dispatch) => {
  dispatch({ type: types.POST_ITEM, payload: payload })
}

export const delData = (payload) => (dispatch) => {
  axios.delete(APIURL)
}
