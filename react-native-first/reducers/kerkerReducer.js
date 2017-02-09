import { KERKER_INCREMENT } from '../actions/kerkerActions.js'

const initialState = {
  kerkerTime : 0
}

function KerkerReducer(state = initialState, action) {
  switch (action.type) {
    case KERKER_INCREMENT:
      return Object.assign({}, state, {
        kerkerTime: state.kerkerTime + 1
      })
    default:
      return state
  }
}

export default KerkerReducer
