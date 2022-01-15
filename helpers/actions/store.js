import { configureStore } from '@reduxjs/toolkit'
import contextEngagement from './stateHomePage'

export default configureStore({
  reducer: contextEngagement.reducer,
})
