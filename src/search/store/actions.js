import {reduxThunkPromise} from '../../common/asyncUtils'
import * as scSearchService from '../services/scSearchService'

export function getScSearchResults(searchQuery) {
  return reduxThunkPromise('SEARCH@GET_SC_SEARCH_RESULTS', (state) => scSearchService.scSearch(searchQuery))
}

export function setSearchQuery(searchQuery) {
  return {
    type: 'SEARCH@SET_SEARCH_QUERY',
    payload: {
      searchQuery
    }
  }
}
