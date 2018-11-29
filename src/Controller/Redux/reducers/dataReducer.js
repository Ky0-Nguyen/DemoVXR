import { actionsType } from 'common/ReduxConstants'

const dataInitState = {
  data: [],
  isLoading: false,
  isRefresh: false,
  isLoadmore: false
}
export default (state = dataInitState, action) => {
  switch (action.type) {
  case actionsType.FETCH_DATA:
    return action.payload
  case actionsType.FETCH_DATA_SUCCESS:
    return { data: action.payload, isLoading: false, isRefresh: false, isLoadmore: false }
  case actionsType.UPDATE_DATA_SUCCESS:
    return { data: action.payload, isLoading: false, isRefresh: false, isLoadmore: false }
  case actionsType.CANCEL_FETCHING_DATA:
    return { data: action.payload, isLoading: false, isRefresh: false, isLoadmore: false }
  default:
    return state
  }
}
