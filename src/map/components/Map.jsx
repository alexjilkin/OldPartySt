import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions'

class Map extends Component {

  render() {
    const {isShowMap, hideMap} = this.props

    return (
      <div>
        {isShowMap ? 'show' : 'hide'}

        <div onClick={hideMap}>hide</div>
      </div>
    )
  }
}

export default connect(
  state => ({
    isShowMap:  state.map.isShowMap
  }), actions
)(Map)
