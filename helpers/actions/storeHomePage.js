import dayjs from 'dayjs'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { constantFormatDate } from 'helpers/constants'

const contextEngagement = createSlice({
  name: 'date_tab',
  initialState: {
    view: 'graph',
    tab: 'daily',
    date: dayjs().format(constantFormatDate.default),
  },
  reducers: {
    changeTab: (state, action) => {
      state.tab = action.payload
    },
    changeView: (state, action) => {
      state.view = action.payload
    },
    changeDate: (state, action) => {
      state.date = action.payload
    },
  },
})

export const { changeTab, changeView, changeDate } = contextEngagement.actions
export default configureStore({
  reducer: contextEngagement.reducer,
})
