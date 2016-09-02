const initialMapState = {
  isShowMap: true
}

function map(map = initialMapState, action) {
  const {type, playload} = action

  switch (type) {
    case 'MAP@HIDE_MAP': {
      return {
        ...map,
        isShowMap: false
      }
    }
    default:
      return map
  }
}

export default map
