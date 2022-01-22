const getStoreSession = (state) => {
  return JSON.parse(JSON.stringify(state.dataStorage))
}
const updateStoreSession = (newState) => {
  sessionStorage.setItem('dataStorage', JSON.stringify(newState))
}

const actions = {
  setDataStorage: (state, action) => {
    return { ...state, dataStorage: action.payload }
  },
  setPostData: (state, action) => {
    const { postIndex, newPost } = action.payload
    const holdDataStorage = getStoreSession(state)
    const holdPosts = holdDataStorage.posts || []

    holdPosts[postIndex] = newPost
    holdDataStorage.posts = holdPosts

    updateStoreSession(holdDataStorage)
    return { ...state, dataStorage: holdDataStorage }
  },
  setLike: (state, action) => {
    const holdDataStorage = getStoreSession(state)
    const holdLikes = holdDataStorage.likes || []

    holdLikes.push(action.payload)
    holdDataStorage.likes = holdLikes

    updateStoreSession(holdDataStorage)
    return { ...state, dataStorage: holdDataStorage }
  },
  setPoint: (state, action) => {
    const holdDataStorage = getStoreSession(state)
    const holdPoints = holdDataStorage.points || []

    holdPoints.push(action.payload)
    holdDataStorage.points = holdPoints

    updateStoreSession(holdDataStorage)
    return { ...state, dataStorage: holdDataStorage }
  },
  setComment: (state, action) => {
    const holdDataStorage = getStoreSession(state)
    const holdComments = holdDataStorage.comments || []

    holdComments.push(action.payload)
    holdDataStorage.comments = holdComments

    updateStoreSession(holdDataStorage)
    return { ...state, dataStorage: holdDataStorage }
  },
}

export default actions
