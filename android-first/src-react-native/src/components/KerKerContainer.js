import { connect } from 'react-redux'
import KerKer from './KerKer'
import {incrementKerker} from '../redux/actions/kerkerActions.js'

import ToastAndroid from '../toast.js';


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
    },
    onToastPress: (id) => {
      if (ToastAndroid) {
        ToastAndroid.show('Awesome', ToastAndroid.SHORT);
      }
    }
  }
}


const KerKerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KerKer)

export default KerKerContainer
