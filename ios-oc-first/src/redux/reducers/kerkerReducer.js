import {
  INCREMENT_KERKER,
  SHOW_ERROR_MESSAGE
 } from '../actions/kerkerActions.js'

const initialState = {
  kerkerTime : 0,
  errors : {
    isVisible : false,
    message : ""
  }
}

function kerkerReducer(state = initialState, action) {
  console.log("kerkerReducer " + action.type)
  switch (action.type) {
    case SHOW_ERROR_MESSAGE:
      let newState = JSON.parse(JSON.stringify(state))
      newState.errors.isVisible = true
      newState.errors.message = action.message
      return valideState(newState)
    case INCREMENT_KERKER:
      return valideState(incrementState(state))
    default:
      return state
  }
}

const incrementState = (state) => {
  let newState = JSON.parse(JSON.stringify(state))

  newState.kerkerTime ++

  return newState
}

const valideState = (state) => {
  let newState = JSON.parse(JSON.stringify(state))
  newState.isInvalid = false
  if(newState.kerkerTime > 3) {
    newState.isInvalid = true
    newState.errors.isVisible = true
    newState.errors.message = "There shall not be more than 3 kerker"
  }

  return newState
}

export default kerkerReducer
