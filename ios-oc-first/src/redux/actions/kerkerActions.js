export const INCREMENT_KERKER = 'INCREMENT_KERKER'

export const incrementKerker = () => {
  return {
    type: INCREMENT_KERKER
  }
}


export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'

export const showErrorMessage = (message) => {
  console.log("showErrorMessage")
  return {
    type : SHOW_ERROR_MESSAGE,
    message : message
  }
}
