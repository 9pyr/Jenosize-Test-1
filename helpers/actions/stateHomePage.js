import { createSlice } from '@reduxjs/toolkit'

const contextEngagement = createSlice({
  name: 'date_tab',
  initialState: {
    view: 'graph',
    tab: 'daily',
  },
  reducers: {
    changeTab: (state, action) => {
      state.tab = action.payload
    },
    changeView: (state, action) => {
      state.view = action.payload
    },
  },
})

export const { changeTab, changeView } = contextEngagement.actions
export default contextEngagement
