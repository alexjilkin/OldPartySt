const initialSearchState = {
  searchResults: [],
  searchQuery: ''
}

function search(search = initialSearchState, action) {
  const {type, payload} = action

  switch (type) {
    case 'SEARCH@GET_SC_SEARCH_RESULTS_SUCCESS': {
      const searchResults = payload

      return {
        ...search,
        searchResults
      }
    }
    case 'SEARCH@SET_SEARCH_QUERY': {
      const {searchQuery} = payload

      return {
        ...search,
        searchQuery
      }
    }
    default:
      return search
  }
}

export default search
