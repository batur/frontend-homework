import * as types from './types'
import { initialState } from './state'

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BEGIN:
      return {
        ...state,
        isLoading: true,
        fetchMessage: '',
      }
    case types.FETCH_SUCCESS:
      const data = Object.assign([], action.payload)
      return {
        ...state,
        items: data,
        isLoading: false,
        fetchMessage: '',
      }

    case types.FETCH_ERROR:
      return {
        ...state,
        items: [],
        isLoading: false,
        fetchMessage: action.payload,
      }

    case types.POST_ITEM:
      break

    default:
      return {
        ...state,
      }
  }
}

export default Reducer
