import { connect } from 'react-redux'
import KerKer from './KerKer'
import '../redux/store.js'
import {incrementKerker} from '../redux/actions/kerkerActions.js'

const getKerkerTime = (stateKerkerTime) => {
  return stateKerkerTime % 4;
}


const mapStateToProps = (state, props) => {
  return {
    kerkerTime: getKerkerTime(state.kerkerReducer.kerkerTime)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onKerKerPress: (id) => {
      dispatch(incrementKerker())
    }
  }
}


const KerKerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KerKer)

export default KerKerContainer
