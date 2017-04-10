import { connect } from 'react-redux'
import { showErrorMessage } from '../redux/actions/kerkerActions.js'
import HomeScene from './HomeScene.js'

const maxKerKerDo = (state, props) => {
  const maxKerKer = props.maxKerker
  let kerkerTime = state.kerkerReducer.kerkerTime
  if(maxKerKer) {
    kerkerTime = kerkerTime % maxKerKer
  }
  return kerkerTime
}


const mapStateToProps = (state, props) => {
  console.log(mapStateToProps + " " + JSON.stringify(state.kerkerReducer))
  return {
    kerkerTime : maxKerKerDo(state, props),
    errors : {
      message : state.kerkerReducer.errors.message,
      isVisible : state.kerkerReducer.errors.isVisible
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showError : () => {
      console.log('showError')
      dispatch(showErrorMessage("C'est pas bien !"))
    }
  }
}


const HomeSceneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScene)

export default HomeSceneContainer
