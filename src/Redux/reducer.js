import * as types from './types'
import { initialState } from './state'

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BEGIN:
      break
    case types.FETCH_SUCCESS:
      break

    case types.FETCH_ERROR:
      break

    case types.POST_ITEM:
      break

    default:
      return {
        ...state,
      }
  }
}

export default Reducer
