import { connect } from 'react-redux'
import KerKer from './KerKer'

const getKerkerTime = (stateKerkerTime) => {
  return kerkerTime % 4;
}


const mapStateToProps = (state) => {
  return {
    kerkerTime: getKerkerTime(state.kerkerTime)
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
