import React from 'react'
import { connect } from 'react-redux'
import { fetchStateData } from '../../store'
import StatePropsWrapper from './StatePropsWrapper'


class PropsRetreiver extends React.Component {


  componentWillMount() {
    this.props.fetchDataThunk()
  }

    render () {
      const states = this.props.stateData
      const targetState = this.props.match.path.slice(1)
      if (states.length) {
      return (
        <div className="chartArea">
          <StatePropsWrapper states={states} targetState={targetState} />
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
    }
  }

  const mapState = (state) => {
    return {
     stateData: state.stateData
    }
  }

  const mapDispatch = (dispatch) => {
    return {
      fetchDataThunk() {
        dispatch(fetchStateData())
      }
    }
  }


  export default connect(mapState, mapDispatch)(PropsRetreiver)