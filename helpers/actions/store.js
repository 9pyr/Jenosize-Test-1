import { default as initialActions } from './actions'
import actionsHomepage from './actionsStateDate'
import dayjs from 'dayjs'
import { constantFormatDate } from 'helpers/constants'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  view: 'graph',
  tab: 'daily',
  date: dayjs().format(constantFormatDate.default),
  dataStorage: typeof window !== 'undefined' && sessionStorage.getItem('dataStorage') ? JSON.parse(sessionStorage.getItem('dataStorage')) : {},
}
const reducers = {
  ...actionsHomepage,
  ...initialActions,
}
const contextEngagement = createSlice({
  name: 'stores',
  initialState,
  reducers,
})

export const { changeTab, changeView, changeDate, setDataStorage, setPostData, setLike, setPoint, setComment } = contextEngagement.actions
export default configureStore({
  reducer: contextEngagement.reducer,
})
