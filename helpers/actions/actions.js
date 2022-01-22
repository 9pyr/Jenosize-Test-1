const getState = (state, key) => {
  return JSON.parse(JSON.stringify(state[key]))
}
const updateStoreSession = (newState) => {
  sessionStorage.setItem('dataStorage', JSON.stringify(newState))
}

const updateState = (state, key, cb) => {
  if (typeof cb === 'function') {
    const holdDataStorage = getState(state, 'dataStorage')
    const holdValue = holdDataStorage[key]

    holdDataStorage[key] = cb(holdValue)

    updateStoreSession(holdDataStorage)
    return { ...state, dataStorage: holdDataStorage }
  }
}
const pushState = (state, key, value) => {
  return updateState(state, key, (holdValue) => {
    holdValue.push(value)

    return holdValue
  })
}
const updateIndexState = (state, key, payload) => {
  const { index, value } = payload
  return updateState(state, key, (holdValue) => {
    holdValue[index] = value

    return holdValue
  })
}

const actions = {
  setDataStorage: (state, action) => {
    updateStoreSession(action.payload)
    return { ...state, dataStorage: action.payload }
  },
  setPostData: (state, action) => {
    return updateIndexState(state, 'posts', action.payload)
  },
  setLike: (state, action) => {
    return pushState(state, 'likes', action.payload)
  },
  setPoint: (state, action) => {
    return pushState(state, 'points', action.payload)
  },
  setComment: (state, action) => {
    return pushState(state, 'comments', action.payload)
  },
}

export default actions
