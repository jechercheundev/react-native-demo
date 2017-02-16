import { INCREMENT_KERKER } from '../actions/kerkerActions.js'

const initialState = {
  kerkerTime : 0
}

function kerkerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_KERKER:
      return Object.assign({}, state, {
        kerkerTime: state.kerkerTime + 1
      })
    default:
      return state
  }
}

export default kerkerReducer
