import React, {PropTypes, Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './scSearch.scss'
import {connect} from 'react-redux'
import * as actions from '../store/actions'

class scSearch extends Component {

  constructor(props) {
    super(props)

    this.handleUserInput = this.handleUserInput.bind(this);
  }
  componentWillMount() {
    //this.props.getScSearchResults('martin')
  }

  handleUserInput(event) {
    const {setSearchQuery} = this.props

    setSearchQuery(event.target.value)
  }

  render() {
    const {searchResults, getScSearchResults, searchQuery} = this.props

    return (
      <div styleName="sc-search">
        <div>
          <input type="text" onChange={this.handleUserInput}/>
          <div onClick={() => getScSearchResults(searchQuery)}> SEARCH! </div>
        </div>
        <ul styleName="search-results">
          {searchResults.map((searchResult, index) =>
            <li key={index} styleName="search-result">
            <div styleName="image" style={{backgroundImage: `url(${searchResult.artwork_url})`}}></div>
              {searchResult.title}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    searchResults:  state.search.searchResults,
    searchQuery: state.search.searchQuery
  }), actions
)(CSSModules(scSearch, styles))
